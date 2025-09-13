var passBox = document.getElementById("passBox")
var range = document.getElementById("range")
var lower = document.getElementById("lower")
var upar = document.getElementById("upar")
var num = document.getElementById("num")
var sym = document.getElementById("sym")
var btn = document.getElementById("btn")
var rangVal = document.getElementById("rangVal")

var uparCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "~`!@#$%^&*()_+|}{}[]/"

range.addEventListener("input",
function(){
    rangVal.textContent=range.value
    console.log("Range Value:", range.value)
    console.log("Span Value:" , rangVal.textContent)
}
)