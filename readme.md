# EA Hub Resource Trail Reboot

Rebooting the resource trail of the EA Hub!!

Current URL: https://elated-khorana-9gb345.netlify.com

## Stack
* Hosting: netlifycms
* Static site generator: Hugo

## Run locally
* ```git clone``` this repo
* run ```brew install hugo```
* run ```hugo server -D```

## Changing content using Netlify CMS (for editors)

### Signup  
* Go to https://elated-khorana-9gb345.netlify.com/admin/
* Signup with email address and password
* Follow link sent to your email. If it doesn't redirect to admin page, go to https://elated-khorana-9gb345.netlify.com/admin/ again
* (When logging in next time, you might get a "Logged in as [Your username] message". If you close it, it   sends you back to the login page. Click login again, and you're redirected to the admin page. )

### Content structure  
There are three layers of content: **categories**, **sections** and **articles**.  

#### Categories
* Hierachy: This is the highest level of content, e.g., "Events", "Start a Group", or "Take Action".
* Format: The index pages of categories contain texts, images, and links to the sections they contain.  
* Add/remove: Categories are predefined and can only be added or removed in the source code, not through the admin panel.  
* Edit: Their index pages can be edited on the admin panel. Click on the category name in the left hand panel, e.g., "Events". The first item in the list, which has the same name as the category, is the category's index page.

#### Sections
* Hierarchy: Categories contain sections. For example, the category "Events" can contain the section "Guide to running events".
* Format: Sections usually contain some text and images and links to articles which provide further detail on the section topic. However, they **don't have** to contain links to articles.
* Add/remove: Admins can change/add/remove sections in their category folder. For example, an admin can add a new section in the category "Events", by clicking on "Events" in the left hand panel and then select "New: Events".
* Edit: A section can be changed in the admin panel by selecting its button in its category's list.  

#### Articles:
* Hierarchy: Articles are the lowest level of content.
* Format: Articles usually contain some text and images.
* Add/remove: Admins can create a new article by clicking on the articles button of the **category** it belongs to. For example, to create an article "Planning checklist" that will later be linked to in the section "Guide to running events", which again belongs to the category "Events", click on the button "Events Articles" on the left hand panel and then select "New: Events Articles". To link to the article in its section, just add its URL in the section text. The URL follows the format ```category_name/articles/article_name```. In our example, this would be ```events/articles/planning_checklist```. The precise article name can be read from the article's URL on the admin page.  
* Edit: Admins can edit articles by selecting its button in it's category's article list.  

### Changing content
* Change content
* Click Save
* Set status to "ready" to make changes ready for publication
* "Publish" to make changes go live
* If you want content to be listed under "Selection of popular articles", add tag "popular"

### Access to Netlify account (for devs)
* https://app.netlify.com
* Ask Seb (sebbecker@gmx.net) for login details

## Changing structure/style
* The page is based on Hugo's ananke theme, and then customised.
* The basic appearance of the page can be changed by editing the relevant HTML and CSS files.
* The HTML template files are located in the themes/ananke/layouts folder:
  * Landing page: index.html
  * Template of the sections pages: default/list.html
  * Template of the articles pages: default/single.html
  * Header on sections and landing pages: partials/site-header.html
  * Header on article pages: partials/page-header.html  
* The customised CSS classes are located in static/css/custom.css
