//console.log('Hello World')
//document.write()  only used for testing, bc it clears existing html of a page
let y=0;
function change(x) {
    if(y%2 == 0){
        document.getElementById("demo").innerHTML = 'Hello Mr.Computer'
    } else {
        document.getElementById("demo").innerHTML = 'Hello Mr.Paul'
    }
    y++;
}

