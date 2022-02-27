const form = document.info

form.addEventListener("submit", (event) => {
    fName = document.getElementById("firstName")
    lName = document.getElementById("lastName")
    age = document.getElementById("age")
    answer = form.chicken.value
    rating = form.rating.value
    inputs = form.grade
    grade = [];
    for (var i = 0;  i < inputs.length; i += 1) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            grade.push(inputs[i].value);
        }
    }
    alert(("First Name: " + fName.value) + ("\r\nLast Name: " + lName.value) + ("\r\nAge: " + age.value) + ("\r\nLikes Chickens: " + answer) + ("\r\nRating: " + rating) + ("\r\nLikes: " + grade))
})
