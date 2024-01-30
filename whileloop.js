 function seperate(){
    var n = parseInt(document.getElementById('number').value)
    var text = ""
    while (n>0) {
       c = n%10;
       text =text + c  +"<br>";
       n =  parseInt(n/10);

    }

    document.getElementById('result').innerHTML = text
 }