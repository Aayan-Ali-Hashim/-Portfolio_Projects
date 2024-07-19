let a;
function onSubmit(event) {
    event.preventDefault();
    let a = document.querySelector("#inputField").value;
    let total = 0;
    for(let i = 0;i<a.length;i++){
        total ++;

    }
    
    let nofWords = 1;

    for(let i = 0; i < a.length ; i++){
        if (a.charAt(i) == " "){
            nofWords ++;
        }

    }
    document.querySelector('#words').innerHTML += `${nofWords}`;
    document.querySelector('#characters').innerHTML += `${total}`;
    

}
