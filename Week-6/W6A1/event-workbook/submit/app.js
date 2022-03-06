// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var form = document.getElementById("submit-me")
boxOne = document.getElementById("name")
boxOne.setAttribute('name', 'user-name')
boxOne.setAttribute('id', 'first-name')
inputOne = document.createElement('input')
inputOne.setAttribute('type', 'number')
form.appendChild(inputOne)
inputTwo = document.createElement('input')
inputTwo.setAttribute('type', 'date')
form.appendChild(inputTwo)
inputThree = document.createElement('input')
inputThree.setAttribute('type', 'color')
form.appendChild(inputThree)
inputFour = document.createElement('input')
inputFour.setAttribute('type', 'range')
form.appendChild(inputFour)
inputFive = document.createElement('input')
inputFive.setAttribute('type', 'radio')
form.appendChild(inputFive)
inputSix = document.createElement('input')
inputSix.setAttribute('type', 'checkbox')
form.appendChild(inputSix)
form.addEventListener('submit', function(e){
    e.preventDefault()
    document.getElementById('submit-me').innerHTML += "Submitted but page not refreshed, "
})