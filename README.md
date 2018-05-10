# Dyscolblind
A Dyslexia/Colour blindness jQuery plugin
Add the code below to your webpage or remove the comment and the script tags while changing the example variables as neccessary.
```
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
```
