// ==UserScript==
// @name       Scratch Messages Filter
// @namespace  scratch.mit.edu/users/YOYITsM3M8
// @version    1.0
// @description Hides messages you don't care about and shows the ones you do.
// @match      https://scratch.mit.edu/messages/*
// @copyright  YOYITsM3M8
// ==/UserScript==


window.onload = (event) => {
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/YOYITsM3M8/ScratchMessagesFilter/master/scrpt.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
};
