//navBar
var navBar = document.createElement('nav')

var link1 = document.createElement('a')
link1.setAttribute('href', 'https://www.google.com/')
link1.textContent = 'Google '
navBar.appendChild(link1)

var link2 = document.createElement('a')
link2.setAttribute('href', 'https://www.w3schools.com/')
link2.textContent = 'W3Schools '
navBar.appendChild(link2)

var link3 = document.createElement('a')
link3.setAttribute('href', 'https://developer.mozilla.org/en-US/')
link3.textContent = 'Mozilla'
navBar.appendChild(link3)

document.body.appendChild(navBar)

//header
var newHeader = document.createElement('h1')
newHeader.textContent = 'Welcome to a website'
document.body.appendChild(newHeader)

//paragraph
var newP = document.createElement('p')
newP.textContent = "This is a site that really dosn't have much too it."
document.body.appendChild(newP)

//list
var newList = document.createElement('ol')
newList.textContent = 'List of things it needed to pass'

var one = document.createElement('li')
one.textContent = 'an h1 tag'
newList.appendChild(one)

var two = document.createElement('li')
two.textContent = 'a p tag'
newList.appendChild(two)

var three = document.createElement('li')
three.textContent = 'a list'
newList.appendChild(three)

var four = document.createElement('li')
four.textContent = 'a footer'
newList.appendChild(four)

var five = document.createElement('li')
five.textContent = 'navbar w/ links'
newList.appendChild(five)

document.body.appendChild(newList)

//footer
var newFooter = document.createElement('footer')
newFooter.textContent = "Heres a footer."
document.body.appendChild(newFooter)