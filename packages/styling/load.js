var head = document.getElementsByTagName('head')[0];

//Generate a style tag
var style1 = document.createElement('link');
style1.type = 'text/css';
style1.rel = "stylesheet";
style1.href = 'http://dl.dropboxusercontent.com/u/179865028/site/css/style1.css';

head.appendChild(style1);

var style2 = document.createElement('link');
style2.type = 'text/javascript';
style2.href = 'http://dl.dropboxusercontent.com/u/179865028/site/js/metismenu.js';

head.appendChild(style2);
