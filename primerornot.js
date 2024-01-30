function prime(){
    var num = parseInt(document.getElementById('number').value)
    var text =""
    var temp = num
    var i = 2
    var flag = 0
   

    while(i <= parseInt(temp/2))
    {
        if(num%i===0)
        {
            flag++
            
        }
        i++;
    }
    if(flag===0)
    {
        text="it is a prime number";
    }
    else{
        text = "it is not a prime number"
    }

   document.getElementById('result').innerHTML =text
}