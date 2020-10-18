function param(name) {
    return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}

var searchQuery = param("s");
if (searchQuery) {
    executeSearch(searchQuery);
}

const keys = ["title", "contents"];
const snipLength = 150

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function makeSnippet(item, index, pattern) {
    const min = Math.max(index - snipLength, 0)
    const max = Math.min(index + snipLength, item.contents.length)
    let substr = item.contents.substring(min, max)
    substr = substr.replace(pattern, '<span class="mark">$&</span>')
    const firstSpace = substr.indexOf(" ")
    const lastSpace = substr.lastIndexOf(" ")
    return "..." + substr.substring(firstSpace, lastSpace) + " ..."
}

function executeSearch(searchQuery) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            const data = JSON.parse(httpRequest.responseText);
            const length = data[0]
            console.log("Received records", data.length, "but really have", length)
            const index = data.slice(1, length + 1)

            const pattern = new RegExp(searchQuery, 'gi');
            const result = index.filter(item => {
                let match = null;
                let index = 0;
                for (var i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (!item[key]) {
                        continue;
                    }
                    match = pattern.exec(item[key])
                    if (key === 'contents' && match) {
                        index = match.index
                    }
                }
                if (match) {
                    item.snippet = makeSnippet(item, index, pattern);
                    return true;
                }
                return false;
            });
            populateResults(result);
        };
    }
    httpRequest.open("GET", "/index.json");
    httpRequest.send();
}

function populateResults(results) {
    let html = ""
    if (results.length == 0) html = "<p>No matches found.</p>";

    let templateDefinition = document.getElementById('search-result-template').innerHTML;
    for (let i = 0; i < results.length; i++) {
        html += render(templateDefinition, results[i]);
    }
    document.getElementById("search-results").innerHTML = html;
    document.getElementById("search-results-header").innerHTML += results.length;
}

function render(templateString, data) {
    var conditionalMatches, conditionalPattern, copy;
    conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    //since loop below depends on re.lastIndex, we use a copy to capture any manipulations inside the loop
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if (data[conditionalMatches[1]]) {
            //valid key, remove conditionals, leave contents.
            copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
        } else {
            //not valid, remove entire section
            copy = copy.replace(conditionalMatches[0], '');
        }
    }
    templateString = copy;
    //now any conditionals removed we can do simple substitution
    var key, find, re;
    for (key in data) {
        find = '\\$\\{\\s*' + key + '\\s*\\}';
        re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
}