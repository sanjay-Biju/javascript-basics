let o = 21
o = 56
const g = 23
g = 78
function checkVar() {
    var n = 5
    if(n===5){
        var m = 6
    }
    console.log(m);
}


function checklet() {
    let n = 5
    if(n===5){
        let m = 10
        console.log(m);

    }
    console.log(g);
}
