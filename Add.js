function sum () {
   var n1 = parseInt(document.getElementById('txt_n1').value)
   var n2 = parseInt(document.getElementById('txt_n2').value)
   var result = n1 + n2
   document.getElementById('result').innerHTML = result
   console.log(n1 + n2);
}
function sub (){
    var n1 = parseInt(document.getElementById('txt_n1').value)
    var n2 = parseInt(document.getElementById('txt_n2').value)
    var result = n1 - n2
    document.getElementById('result').innerHTML = result
    console.log(n1 - n2);
}
function product () {
    var n1 = parseInt(document.getElementById('txt_n1').value)
    var n2 = parseInt(document.getElementById('txt_n2').value)
    var result = n1 * n2
    document.getElementById('result').innerHTML = result
    console.log(n1 * n2);
}
function div (){
    var n1 = parseInt(document.getElementById('txt_n1').value)
    var n2 = parseInt(document.getElementById('txt_n2').value)
    var result = n1 / n2
    document.getElementById('result').innerHTML = result
    console.log(n1 / n2);
}