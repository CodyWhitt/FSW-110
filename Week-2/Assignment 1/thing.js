var newHeader = document.createElement('h1')
newHeader.textContent = 'Welcome to my JS site'
document.body.appendChild(newHeader)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with JavaScript'
document.body.appendChild(newP)

var newList = document.createElement('ol')
newList.textContent = 'Three Items'

var one = document.createElement('li')
one.textContent = '1'
newList.appendChild(one)

var two = document.createElement('li')
two.textContent = '2'
newList.appendChild(two)

var three = document.createElement('li')
three.textContent = '3'
newList.appendChild(three)

document.body.appendChild(newList)