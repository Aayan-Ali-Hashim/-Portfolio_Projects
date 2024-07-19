function updateTime(){
    
    const date = new Date() 
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    let day;
    const todaydate = date.getDate()

    switch(date.getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

    }
    if(hours > 6 && hours < 18){
        document.querySelector("body").style.backgroundImage = "linear-gradient(white,#5dc1ff)";
        document.querySelector("body").style.backgroundSize = "100vh 300vh";
        document.querySelector("#headings").style.color = "black";
        document.querySelector("#date").style.color = "black";
        document.querySelector("#day").style.color = "black";
        document.querySelector(".greeting").style.color = "black";
        if(hours > 6 && hours < 12 ){
            document.querySelector(".greeting").innerHTML = "Good Morning";
        }
        else{
            document.querySelector(".greeting").innerHTML = "Good Afternoon";
        }
    }
    else if(hours >= 18 && hours <= 20){
        document.querySelector("body").style.backgroundColor = "#150E5C";
        document.querySelector("body").style.backgroundSize = "100vh 300vh";
        document.querySelector("#headings").style.color = "white";
        document.querySelector("#date").style.color = "white";
        document.querySelector("#day").style.color = "white";
        document.querySelector(".greeting").innerHTML = "Good Evening";
    }
    else if(hours >= 21 || hours <= 5 ){
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.backgroundSize = "100vh 300vh";
        document.querySelector("#headings").style.color = "white";
        document.querySelector("#date").style.color = "white";
        document.querySelector("#day").style.color = "white";
        document.querySelector(".greeting").innerHTML = "Good Night";
    }

    document.querySelector('#date').innerHTML = todaydate;
    document.querySelector('#day').innerHTML = day;
    document.querySelector('#hours').innerHTML =   hours < 10 ? `0${hours}` : hours;
    document.querySelector('#minutes').innerHTML = minutes  < 10 ? `0${minutes}` : minutes;
    document.querySelector('#seconds').innerHTML = seconds  < 10 ? `0${seconds}` : seconds;
}


setInterval(updateTime, 1000);