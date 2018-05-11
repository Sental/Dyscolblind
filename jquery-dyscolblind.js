(function ( $ ) {
 
    $.fn.dyscolblind = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
			varient: "color",
            color: "#e5e5f5",
			mode: "select",
			target: "",
			tags: ["p", "a", "div", "h1", "h2", "h3", "h4", "h5", "h6", "span", "body"]
        }, options );
		var vari = settings.varient;
		var colour = settings.color;
        
		setCookie(vari, colour);
		if (colour == "default") {
		colour = "unset";
		}
		if (settings.mode == "select") { 
			var tag = settings.tags;
			$(document).ready(function(){
			$(this).on("change", function() {
				if (Array.isArray(tag) ) {
		console.log('Is an Array');}
		$.each(settings.tags, function(index,  value) {
		$(value).css(vari, colour);});});
		});}
        else if (settings.mode == "submit") {
		var tag = settings.tags;
		$(document).ready(function(){
		$(this).on("click", function() {
			if (Array.isArray(tag) ) {
		console.log('Is an Array');}
			$.each(settings.tags, function(index,  value) {
		$(value).css(vari, colour);});});
		});
		}
		}
	
		
		
}( jQuery ));

		
    function setCookie(select, value) {
	document.cookie = select + "=" + value + "; path=/";
}

    function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

    function readCookie(select, tags) {
	var colour = getCookie(select);
    if (colour == "default") {
		colour = "unset";
		}
	if (colour == "") {return}
	else {
		jQuery.each(tags, function(index,  value) {
		jQuery(value).css(vari, colour);});
	}
}

/* 
Add the code below to your webpage or remove the comment and the script tags while changing the example variables as neccessary.
<script>
readCookie("color", ["p","body"]); 
readCookie("background-color", ["body"]);
jQuery(function($) {
var text = ["p", "body"];
var background = ["body"];
$('#example-select').dyscolblind({varient: "color", color: $('#example-select').val(), mode:"select", tags:text});});
$('#example-button').dyscolblind({varient: "background-color", color: $("#example-input").val(), mode:"submit", tags:background});});
});
</script>
*/
