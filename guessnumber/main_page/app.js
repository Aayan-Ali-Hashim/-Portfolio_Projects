let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber)

function playSuccessSound() {
    const successSound = document.getElementById('success-sound');
    successSound.play();
}
function playloseSound() {
    const loseSound = document.getElementById('lose-sound');
    loseSound.play();
}
function playWinSound(){
    const winSound = document.getElementById('win-sound');
    winSound.play();
}
function endGame(){
    document.getElementById("playagain").classList.remove("hidden");
}
function loading(){
    document.getElementById("loader").classList.remove("hidden");
}

document.querySelector("#playagain").addEventListener("click",function() {
    window.location.reload();
})

document.getElementById("btn1").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading();

    setTimeout(() =>{
        if(document.getElementById("btn1").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
             document.querySelector(".answer").innerHTML = "Wrong";
             playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();
    },1000)
    
})
document.getElementById("btn2").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading();

    setTimeout(() => {
        if(document.getElementById("btn2").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
             document.querySelector(".answer").innerHTML = "Wrong";
             playloseSound();
             
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();
    }, 1000);
})
document.getElementById("btn3").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading();
    setTimeout(()=>{
        if(document.getElementById("btn3").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();

    },1000)
})
document.getElementById("btn4").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading();
    setTimeout(()=>{

        if(document.getElementById("btn4").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();

    },1000)
})
document.getElementById("btn5").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading();
    setTimeout(()=>{
        if(document.getElementById("btn5").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();

    },1000)
})
document.getElementById("btn6").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading();
    setTimeout(()=>{
        if(document.getElementById("btn6").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
                }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();

    },1000)
})
document.getElementById("btn7").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading();
    setTimeout(()=>{
        if(document.getElementById("btn7").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();

    },1000)
})
document.getElementById("btn8").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading()
    setTimeout(()=>{
        if(document.getElementById("btn8").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();
    },1000)
        
})
document.getElementById("btn9").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading()
    setTimeout(()=>{
        if(document.getElementById("btn9").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();
    },1000)
        
})
document.getElementById("btn0").addEventListener("click", function(e) {
    e.preventDefault()
    playSuccessSound();
    loading()
    setTimeout(()=>{
        if(document.getElementById("btn0").innerHTML== randomNumber){
            document.querySelector(".answer").innerHTML = "Right";
            playWinSound();
        }
        else{
            document.querySelector(".answer").innerHTML = "Wrong";
            playloseSound();
        }
        document.getElementById("loader").classList.add("hidden");
        endGame();
    },1000)
        
})
