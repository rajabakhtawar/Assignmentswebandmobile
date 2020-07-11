var seconds = 0;
var minutes = 0;
var hours = 0;
var micsec = 0;


var  displaySeconds = 0;
var  displayMinutes = 0;
var  displayHours = 0;
var displayMicsec = 0;

var  interval = null;

var status = "stopped";

function stopWatch(){

    micsec++;

    //Logic to determine when to increment next value
    if(micsec / 10 === 1){
        micsec = 0;
        seconds++;

        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
        }
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    // if(seconds < 10){
    //     displaySeconds = "0" + seconds.toString();
    // }
    // else{
    //     displaySeconds = seconds;
    // }

    // if(minutes < 10){
    //     displayMinutes = "0" + minutes.toString();
    // }
    // else{
    //     displayMinutes = minutes;
    // }

    // if(hours < 10){
    //     displayHours = "0" + hours.toString();
    // }
    // else{
    //     displayHours = hours;
    // }

    if(micsec < 10){
        displayMicsec = "0" + micsec.toString();
    }
    else{
        displayMicsec = micsec;
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }


    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" +displayMicsec;

}

function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 100);
        document.getElementById("startStop").innerHTML = "";
        document.getElementById("startStop").style.display = "none"
        document.getElementById("pause").style.display = "inline"
        status = "started";
    }
    else{

        window.clearInterval(interval);
        // document.getElementById("startStop").innerHTML = "";
        document.getElementById("pause").style.display = "none"
        document.getElementById("startStop").style.display = "inline"
        status = "stopped";
        // document.getElementById("pause").style.display = "none"
        // document.getElementById("startStop").style.display = "inline"
    }

}
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
     micsec = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    status = "stopped"
    document.getElementById("startStop").style.display = "inline"
    document.getElementById("pause").style.display = "none"



}

