//list h1 10 times
for (i = 0; i < 10; i++) {
    var words = document.createElement('h1');
    words.textContent = 'Hello World';
    document.body.appendChild(words);
}


//make em red
var h1s = document.getElementsByTagName("h1");

for (i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "red";
}

//that new array
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

//smack that array on the webpage
for (i = 0 ; i < names.length; i++) {
    var array = document.createElement("p")
    array.textContent = names[i];
    document.body.appendChild(array);
}