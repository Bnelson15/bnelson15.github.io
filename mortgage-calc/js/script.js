function Reset() {
    document.getElementById("out").value = "";}

function Calculate() {
var N= Number((12).value) ;
var P= Number(document.getElementById("P").value);
var R= Number(document.getElementById("R").value);
var T= Number(document.getElementById("T").value);
var M= Number(document.getElementById("M").value);
var B= (P(1+R/N)**N*T) - (M [((1+R/N)**N*T) -1])/(R/N);
document.getElementById("out").innerHTML = "$"+ B ;
}


