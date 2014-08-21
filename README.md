Defer-JS
========

Defer loading of scripts until after the page has finished loading.

Putting your scripts at the bottom of the page, using the defer attirbute, or using async does not achieve this. This script actually makes sure the scripts do not load until after the page has finished loading.

Just copy the script out of the defer.js file, and place within script tags before the closing body tag (adding your scripts to the array and removing the comments of course).
