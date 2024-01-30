function reverse(){
    var num = parseInt(document.getElementById('number').value)
    var text = ""
    while (num>0) {
        c = num%10;
        text = text + c;
        num = parseInt(num/10);
    }
    document.getElementById('result').innerHTML=text
}