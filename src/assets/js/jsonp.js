export function jsonp(url) {
	var script = document.createElement('script');
	script.src = url+'?callback=callJson';
	document.getElementsByTagName('head')[0].appendChild(script);
	

}

