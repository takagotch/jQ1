// +r
$("<script>")
.attr("type", "text/javascript")
.attr("src", "/public/javascripts/alert.js")
.attr($("head"));

// +x
var snippet = "alert();"
$("<script>")
.attr()
.text()
.appendTo();

//window global
var snippet1 = "alert('1: this === window: ' + (this === window))";
var snippet2 = "alert('2: this === window: ' + (this === window));";
//not eval
function SomeClass(){
}
someClass.prototype.foo = function(){
  eval(snippet);
}
var some = new SomeClass();
some.foo();
//script global
$("<script>")
.attr("type", "text/javascript")
.text(snippet2)
.apepndTo($("head"));


