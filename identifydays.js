function days(){
    var number = Number( document.getElementById('txt_number').value) 
    var day=""
    
    switch (number) {
        case 1:
        day="sunday"
            break;

        case 2:
            day="Monday"
            break;  
        case 3:
            day="Tuesday"
            break;
        case 4:
            day="Wednesday"
            break;
        case 5:
            day="Thursday"
            break;
        case 6:
            day="Friday"
            break;
        case 7:
            day="Saturday"
            break;                
    
        default:
            day="invalid number"
            break;
    }
    document.getElementById('result').innerHTML = day
}