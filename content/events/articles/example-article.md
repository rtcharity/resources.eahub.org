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

<a href="#jump-link">1. Jump links</a>  
<a href="#tables">2. Tables</a>  
<a href="#images">3. Images</a>

<a name="jump-link"></a>1. Jump links 
 
<a href="#target">Jump link</a>

<a name="tables"></a>2. Tables   

This is a table. Check out Markdown to see how to create it

| Column Title1 | Column Title 2 | Column Title 3 |
| ------------- | -------------- | -------------- |
| Text          | yadaday        | $1600          |
| more stuff    | this is        | $12            |
| exaaaaample   | what up NYC?   | $1             |


<a name="images"></a>3. Images  
This is a large, centered image:

<p class="article_large_image">
 <img src="/img/bill-gates.jpg" />
</p>

Notice the paragraph tag `<p>` around the image. You need it, don't remove it.

If you want to add a new image, add it through the menu above (the plus icon). Then switch to Markdown to copy its filepath (in the case of the above image it's `/img/bill-gates.jpg`. Then copy paste the bit of HTML above and replace the href with the filepath of your new picture.

This is a small, left-aligned image, which text floats around:

<img class="article_small_image" style="float: left" src="/img/bill-gates.jpg" />

Notice that for small images you don't need the paragraph tag `<p>`. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

<a name="target"></a>This here is the target of the jump link.
