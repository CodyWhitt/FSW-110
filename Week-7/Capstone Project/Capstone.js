submit = document.getElementById("submit")
task = document.getElementById("task")
description = document.getElementById("description")
time = document.getElementById("time")
form = document.getElementById("form")
output = document.getElementById("output")
counter = 0

submit.addEventListener("click", function(e) {
    e.preventDefault()
    final = document.createElement('li')
    deleteButton = document.createElement("button")
    // deleteButton.setAttribute("id", counter)
    // counter = (counter+1)
    final.innerHTML = task.value + ": " + description.value + " @ " + time.value + " "
    output.appendChild(final)
    final.appendChild(deleteButton)
    deleteButton.innerHTML = "delete"
    deleteButton.onclick = function() {
        this.parentElement.remove()
    };
    console.log("Item Submitted")
})
