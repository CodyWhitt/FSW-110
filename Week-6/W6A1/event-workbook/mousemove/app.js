// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

box = document.getElementsByClassName("red-box")

box[0].addEventListener("mousemove", function(e){
    var output = document.getElementsByTagName('h1')
    output[0].textContent = e.clientX + " and " + e.clientY
})