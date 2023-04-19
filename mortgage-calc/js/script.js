function Reset() {
    document.getElementById("out").value = "";}

function Calculate() {
var principal= Number(document.getElementById("principle").value);
var interest= Number(document.getElementById("interest").value);
var years= Number(document.getElementById("years").value);
var payment= Number(document.getElementById("Payment").value);
var answer= principal * interest * years * payment; 
document.getElementById("out").innerHtml = "$"+ answer ;
}

