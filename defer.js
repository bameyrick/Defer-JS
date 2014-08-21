/*!
 * Defer JS v1.0.0
 * https://github.com/qntm/Defer-JS
 *
 * Copyright 2014 Ben Meyrick
 * Released under the MIT license
 */


/* Defer all scripts until after page load. The defer property on the script tag does not do this
properly. This is pretty much guaranteed to work */

var u = [           
   /* Use a comma separated array of your scripts here, e.g. '/js/plugins.js', '/js/main.js' etc*/
]
function d() {
	for (var i = 0; i < u.length; i++) {
		var element = document.createElement("script");
		element.src = u[i];
		document.body.appendChild(element);
	};
}
if (window.addEventListener)
	window.addEventListener("load", d, false);
else if (window.attachEvent)
	window.attachEvent("onload", d);
else window.onload = d;

/* if using this in Umbraco, place this script in the master template, and then in each child template
add a section called scripts. You can then pass through scripts specific to that page as well as global
scripts like so:

var u = [           
   '/scripts/main.js'
   @RenderSection("scripts", false)
]

*/