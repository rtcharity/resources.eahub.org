# EA Hub Resource Trail Reboot

Rebooting the resource trail of the EA Hub

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

### Changing content
* Change content
* Click Save
* Set status to "ready" to make changes ready for publication
* "Publish" to make changes go live
* If you want content to be listed under "Selection of popular articles", add tag "popular"

### Changing structure/style
* The page is based on Hugo's ananke theme, and then customised.
* The HTML template files are located in the themes/ananke/layouts folder:
  * Landing page: index.html
  * Template of the sections pages: default/list.html
  * Template of the articles pages: default/single.html
  * Header on sections and landing pages: partials/site-header.html
  * Header on article pages: partials/page-header.html  
* The customised CSS classes are located in static/css/custom.css

### Access to Netlify account (for devs)
* https://app.netlify.com
* Ask Seb (sebbecker@gmx.net) for login details
