# Landing page for the FORT project

## Getting started

You need to install Hugo.

``` bash
sudo snap install hugo
```

Then `hugo server` from the root will live display the website.

### Adding wiki pages

Simply add a page in `content/wiki/<section>` `<section>` could be omitted to go in the top section

### Adding a wiki section

Add a new index file in `content/wiki/<new-section>/_index.md` listing the section as sub-menu of wiki

``` yaml
#content of a wiki section index
---
menu:
  main:
    name: "Menu Name"
    parent: "Wiki"
---
```

### Adding a single top level page

Add a new file in `content` and add the following to the front matter

``` yaml
---
title: "Potentially a very long title"
menu:
  main:
    name: "Your menu title"
---
```


### Adding / using assets.

Assets (images, css ) should be placed under `/static/` folder they will be accessible with from markdown using `/static/<path-to-assets/`

I propose the following structure
* `/images`: all images for the top section level
* `/css`: all custom css for the top section level
* `/wiki/<section>/images` : wiki images for the section of the wiki.
