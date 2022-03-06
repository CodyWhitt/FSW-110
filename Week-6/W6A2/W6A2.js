var coffee = document.getElementById("coffee")
var tea = document.getElementById("tea")
var bagel = document.getElementById("bagel")
var total = document.getElementById("total")
var button = document.getElementById("button")

coffeePrice = 100
teaPrice = 2
bagelPrice = 2

button.addEventListener("click", function(e) {
    num1 = (parseInt(coffee.value) * coffeePrice)
    num2 = (parseInt(tea.value) * teaPrice)
    num3 = (parseInt(bagel.value) * bagelPrice)
    total.value = (num1 + num2 + num3)
})