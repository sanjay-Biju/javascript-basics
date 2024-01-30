
function reverse(){
    var num = parseInt(document.getElementById('number').value)
    var text = ""
    do {
        c = num%10;
        text = text + c;
        num = parseInt(num/10);

    } while (num>0);
    document.getElementById('result').innerHTML=text

}
