function submitForm() {
  var form = $('#form');
  var updatedForm = "form-name=" + form.attr('name') + "&" + form.serialize();

  $.ajax({
    url: "https://confident-minsky-f713d6.netlify.com/contact-lean/",
    method: "POST",
    headers: {
        "content-type": "application/x-www-form-urlencoded"
    },
    data: "not what is needed",
    success: function(result) {
      console.log(result)
    }
  });
}
