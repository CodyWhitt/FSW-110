var add = document.getElementById('add')
add.addEventListener('mousedown', function() {
    answer1 = document.getElementById('final')
    var txt1 = document.getElementById('num1')
    num1 = txt1.value
    var txt2 = document.getElementById('num2')
    num2 = txt2.value
    final = (parseInt(num1) + parseInt(num2))
    answer1.value = final
})

var add = document.getElementById('subtract')
add.addEventListener('mousedown', function() {
    answer2 = document.getElementById('final')
    var txt3 = document.getElementById('num3')
    num1 = txt3.value
    var txt4 = document.getElementById('num4')
    num2 = txt4.value
    final = (parseInt(num1) - parseInt(num2))
    answer2.value = final
})

var add = document.getElementById('multiply')
add.addEventListener('mousedown', function() {
    answer3 = document.getElementById('final')
    var txt5 = document.getElementById('num5')
    num1 = txt5.value
    var txt6 = document.getElementById('num6')
    num2 = txt6.value
    final = (parseInt(num1) * parseInt(num2))
    answer3.value = final
})

var add = document.getElementById('divide')
add.addEventListener('mousedown', function() {
    answer4 = document.getElementById('final')
    var txt7 = document.getElementById('num7')
    num1 = txt7.value
    var txt8 = document.getElementById('num8')
    num2 = txt8.value
    final = (parseInt(num1) / parseInt(num2))
    answer4.value = final
})