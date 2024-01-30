  
  
console.log('hai');
function status(){

    var name = document.getElementById('txt_name').value
    var gender = document.getElementById('txt_gender').value
    var marital = document.getElementById('txt_marital').value
    console.log(name);
    console.log(gender);
    console.log(marital);
    var result=""

    if( gender==="female"){
        if(marital==="single"){
            result="Ms."+name
        }else{
            result="Mrs."+name
        }
    }else{
        result="Mr."+name
    }
    document.getElementById('result').innerHTML=result
}