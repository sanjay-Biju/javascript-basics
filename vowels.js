 function alphabets(){
    var alphabet = document.getElementById('txt_alphabet').value
 
    var result=""
if(alphabet==="a" || alphabet==="e" || alphabet==="i" || alphabet==="o" || alphabet==="u" )
{
result="it is a vowel"
}

else{
result="it is not a vowel"
}

document.getElementById('result').innerHTML = result

 }