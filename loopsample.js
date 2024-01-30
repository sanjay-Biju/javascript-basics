function display(){
    var input = parseInt(document.getElementById('number').value)
    var text = ""
    for(i=1;i<=input;i++){
        text = text + i  +"<br>";

    }
    document.getElementById('result').innerHTML=text

}