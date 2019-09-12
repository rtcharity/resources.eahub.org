---
title: Example Article
date: 2019-08-29T20:01:47.775Z
description: >-
  This is an example article to show how to implement the features requested in
  [this github
  ticket](https://github.com/rtcharity/resources.eahub.org/issues/427)
author: Seb
license:
  - name: Creative Commons Attribution-ShareAlike 3.0
    url: 'https://creativecommons.org/licenses/by-sa/3.0/legalcode'
---
This is an example article to show how to implement the features requested in \[this github ticket](https://github.com/rtcharity/resources.eahub.org/issues/427)

<a href="#jump-link">1. Jump links</a>\
<a href="#tables">2. Tables</a>\
<a href="#images">3. Images</a>   
<a href="#links">4. Links</a>   
<a href="#videos">5. Videos</a>

<a name="jump-link"></a>

## 1. Jump links

<a href="#target">Jump link</a>

<a name="tables"></a>

## 2. Tables

This is a table. Check out Markdown to see how to create it

| Column Title1 | Column Title 2 | Column Title 3 |
| ------------- | -------------- | -------------- |
| Text          | yadaday        | $1600          |
| more stuff    | this is        | $12            |
| exaaaaample   | what up NYC?   | $1             |

<a name="images"></a>

## 3. Images

This is a large, centered image:

<p class="article_large_image">
 <img src="/img/bill-gates.jpg" />
</p>

Notice the paragraph tag `<p>` around the image. You need it, don't remove it.

If you want to add a new image, add it through the menu above (the plus icon). Then switch to Markdown to copy its filepath (in the case of the above image it's `/img/bill-gates.jpg`. Then copy paste the bit of HTML above and replace the href with the filepath of your new picture.

This is a small, left-aligned image, which text floats around:

<img class="article_small_image" style="float: left" src="/img/bill-gates.jpg" />

Notice that for small images you don't need the paragraph tag `<p>`. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

## 4. Lists

You can simply create alphanumeric lists by writing them according to your liking in Markdown mode. Watch out for the following potential pitfalls:

* Leave two whitespaces at the end of a line (or a backward slash) to ensure there is a linebreak after
* Add sufficient whitespace before the letters/numbers to achieve indentation (see below example) . 

1. Item 1\
   a) Subitem 1A   
   b) Subitem 1B  

2. Item 2\
   a) Subitem 2A  
   b) Subitem 2B  

## 5. Videos

This is a video. Checkout Markdown to see how to embed it. For the link to the video (```src```) make sure to use a link suitable for embedding on a webpage. For example, for a youtube video choose an embed link (accessible when you click on ```Share``` under a video and then ```Embed```).

    <iframe width="420" height="315"
      src="https://www.youtube.com/embed/WyprXhvGVYk">
    </iframe>

<a name="target"></a>This here is the target of the jump link.
