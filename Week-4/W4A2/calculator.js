num1 = ""
thing = ""
num2 = ""
final= ""
var txt1 = document.getElementById('num1')
    txt1.value = num1
var txt2 = document.getElementById('thing')
    txt2.value = thing
var txt3 = document.getElementById('num2')
    txt3.value = num2
var txt4 = document.getElementById('final')
    txt4.value = final

//Numbers
{
var one = document.getElementById('1')
one.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+1
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+1
    }
    txt1.value = num1
    txt3.value = num2
})

var two = document.getElementById('2')
two.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+2
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+2
    }
    txt1.value = num1
    txt3.value = num2
})
var three = document.getElementById('3')
three.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+3
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+3
    }
    txt1.value = num1
    txt3.value = num2
})

var four = document.getElementById('4')
four.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+4
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+4
    }
    txt1.value = num1
    txt3.value = num2
})

var five = document.getElementById('5')
.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+5
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+5
    }
    txt1.value = num1
    txt3.value = num2
})

var six = document.getElementById('6')
six.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+6
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+6
    }
    txt1.value = num1
    txt3.value = num2
})

var seven = document.getElementById('7')
seven.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+7
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+7
    }
    txt1.value = num1
    txt3.value = num2
})

var eight = document.getElementById('8')
eight.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+8
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+8
    }
    txt1.value = num1
    txt3.value = num2
})

var nine = document.getElementById('9')
nine.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+9
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+9
    }
    txt1.value = num1
    txt3.value = num2
})

var zero = document.getElementById('0')
zero.addEventListener('mousedown', function() {
    if (thing === "") {
        num1 = num1+0
    } else if (thing === "+"||"-"||"/"||"*") {
        num2 = num2+0
    }
    txt1.value = num1
    txt3.value = num2
})
}

//Things
{
var div = document.getElementById('/')
div.addEventListener('mousedown', function() {
    if (thing === "") {
        thing = "/"
    }
    txt2.value = thing
})

var mult = document.getElementById('X')
mult.addEventListener('mousedown', function() {
    if (thing === "") {
        thing = "X"
    }
    txt2.value = thing
})

var sub = document.getElementById('-')
sub.addEventListener('mousedown', function() {
    if (thing === "") {    
        thing = "-"
    }
    txt2.value = thing
})

var add = document.getElementById('+')
add.addEventListener('mousedown', function() {
    if (thing === "") {
        thing = "+"
    }
    txt2.value = thing
})
}

//Clear & "enter"
var clear = document.getElementById('Cl')
clear.addEventListener('mousedown', function() {
    final = ""
    num1 = ""
    num2 = ""
    thing = ""
    txt1.value = num1
    txt2.value = thing
    txt3.value = num2
    txt4.value = final
})

var enter = document.getElementById('=')
enter.addEventListener('mousedown', function() {
    if (thing === "+") {
            final = (parseInt(num1) + parseInt(num2))
        } else if (thing === "-") {
            final = (parseInt(num1) - parseInt(num2))
        } else if (thing === "X") {
            final = (parseInt(num1) * parseInt(num2))
        } else if (thing === "/") {
            final = (parseInt(num1) / parseInt(num2))
        } else if (num1 || num2 || thing === "") {
            final = "ERR"
        }
        txt4.value = final
    }
)


