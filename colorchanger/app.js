let isclickedbutton = false
document.querySelector('#yellow-btn').addEventListener('click',()=>{
    if(isclickedbutton){
        
        document.body.style.backgroundColor = 'white'
        isclickedbutton = false
    }
    else{
        document.body.style.backgroundColor = 'yellow'
        isclickedbutton = true
    }


})
document.querySelector('#green-btn').addEventListener('click',()=>{
    if(isclickedbutton){
        
        document.body.style.backgroundColor = 'white'
        isclickedbutton = false
    }
    else{
        document.body.style.backgroundColor = 'green'
        isclickedbutton = true
    }

    
})