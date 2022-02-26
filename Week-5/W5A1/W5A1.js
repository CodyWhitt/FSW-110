var firstBox = document.getElementById("firstBox");
var secondBox = document.getElementById("secondBox");
var thirdBox = document.getElementById("thirdBox");

var button = document.getElementById("button");
button.addEventListener ('mousedown', function() {
    alert("You entered " + firstBox.value + " " + secondBox.value + " " + thirdBox.value)
});