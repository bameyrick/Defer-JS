/*!
 * Synchronous Defer JS v1.0.1
 * https://github.com/qntm/Defer-JS
 *
 * Copyright 2014 Ben Meyrick
 * Released under the MIT license
 */


/* Defer all scripts until after page load. The defer property on the script tag does not do this
properly. This is pretty much guaranteed to work.  This version won't begin loading the next script until the first one has finished */ 

var u = [
   /* Use a comma separated array of your scripts here, e.g. '/js/plugins.js', '/js/main.js' etc*/
], i = 0, l = u.length;

function d() {
		var e = document.createElement("script");
		e.src = u[i];
		document.body.appendChild(e);
      
		i++;

		if (i < l)
		    addEventListener(e, d);
}

function addEventListener(e, f) {
    if (window.addEventListener)
        e.addEventListener("load", f, false);
    else if (window.attachEvent)
        e.attachEvent("onload", f);
    else e.onload = f;
}

addEventListener(window, d);

/* if using this in Umbraco, place this script in the master template, and then in each child template
add a section called scripts. You can then pass through scripts specific to that page as well as global
scripts like so:

var u = [           
   '/scripts/main.js'
   @RenderSection("scripts", false)
]

*/
