const rainbowSquare = document.getElementById('rainbowsquare')

rainbowSquare.addEventListener('mouseover', function() {
    rainbowSquare.style.backgroundColor = "green"
})

rainbowSquare.addEventListener('dblclick', function() {
    rainbowSquare.style.backgroundColor = "red"
})

rainbowSquare.addEventListener('mousedown', function() {
    rainbowSquare.style.backgroundColor = "yellow"
})

rainbowSquare.addEventListener('mouseup', function() {
    rainbowSquare.style.backgroundColor = "blue"
})

addEventListener('wheel', function() {
    rainbowSquare.style.backgroundColor = "purple"
})


//this is the only way i could figure this one out. would love a better non-depricated way. thanks.
addEventListener('keydown', function () {
    z = `${event.key}`
    if (z === "g") {
        rainbowSquare.style.backgroundColor = "green"
    } else if (z === "r") {
        rainbowSquare.style.backgroundColor = "red"
    } else if (z === "y") {
        rainbowSquare.style.backgroundColor = "yellow"
    } else if (z === "b") {
        rainbowSquare.style.backgroundColor = "blue"
    } else if (z === "p") {
        rainbowSquare.style.backgroundColor = "purple"
    }
})