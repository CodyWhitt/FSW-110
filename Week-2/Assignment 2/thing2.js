var newHeader = document.createElement('h1')
newHeader.textContent = 'Welcome to a website'
document.body.appendChild(newHeader)

var newP = document.createElement('p')
newP.textContent = "This is a site that really dosn't have much too it."
document.body.appendChild(newP)

var newList = document.createElement('ol')
newList.setAttribute('id', 'newList')
newList.textContent = 'Three Items'
document.body.appendChild(newList)

var one = document.createElement('li')
one.textContent = '1'
newList.appendChild(one)

var two = document.createElement('li')
two.textContent = '2'
newList.appendChild(two)

var three = document.createElement('li')
three.textContent = '3'
newList.appendChild(three)

var newP = document.createElement('footer')
newP.textContent = "Heres a footer."
document.body.appendChild(newP)
