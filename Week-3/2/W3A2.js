//list h 5 times
for (i = 0; i <5; i++) {
    var words = document.createElement('h2');
    words.textContent = 'Hello World';
    words.style.fontSize = '20px'
    words.style.fontWeight = 'lighter'
    words.style.fontFamilty = 'sans-serif'
    words.style.backgroundColor = 'cornFlowerBlue'
    words.classList.add("border");
    document.body.appendChild(words);
}