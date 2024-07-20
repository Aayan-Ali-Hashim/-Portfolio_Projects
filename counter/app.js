function decrease(){
    if (document.querySelector('#display').innerHTML <= 0){
        document.querySelector('#display').innerHTML = 0;
    }
    else{
        
        document.querySelector('#display').innerHTML--;
    }

}
function increase(){
    document.querySelector("#display").innerHTML++;
}
function reset(){
    document.querySelector("#display").innerHTML = 0;
}