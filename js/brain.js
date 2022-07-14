// dom elements 
const playPauseBtn = document.querySelector('#play-pause-btn');
const timer = document.querySelector('#timer');
const reset = document.querySelector('#reset-btn');


// timer variables 
let minutes = 0;
let hours = 0;
let seconds = 0;
let pause;


// play pasue button transition on click 
playPauseBtn.addEventListener('click',()=>{

    // it toggles the play button and pasue button 
    if(playPauseBtn.classList.contains('fa-play')){
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add('fa-pause');

    } else{
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add('fa-play');
    }


    // this code starts the timer 
    if(playPauseBtn.classList.contains('fa-pause')){
        pause = setInterval(start,1000);
    }
   
    if(playPauseBtn.classList.contains('fa-play')){
        clearInterval(pause);
    }
})


// this function here resets the code 
reset.addEventListener('click',()=>{
    // the set interval is cleared 
     clearInterval(pause);
    //  time is resetted 
     minutes = hours = seconds = 0;
    //  we display 0 
     display(0,0,0);
     // and we toggle the pasue button to play
     playPauseBtn.classList.add('fa-play');
})


// this is the main logic 
function start(){
    // every second (1000ms) seconds gets incremented by 1
    seconds++;
    if((seconds / 60 === 1 )){
        // when second reahces 60 then 
        // - second is resetted to 0 
        // - minute is incremented by 1 
        seconds = 0;
        minutes++;
            if(minutes/60 === 1){
                // when minutes reaches 60 
                // - minute is reseted to 0 
                // -hours is incremented by 1
                minutes = 0;
                hours++;
                 if(hours / 24 === 0){
                    // when hours hiits 24 
                    // - all three of them are resetd 
                    hours = minutes = seconds = 0;
                }
            }
    }

    // and this function here displays our minutes hhours and second 
    display(minutes,hours,seconds);
}

function display(minutes,hours,seconds){

    // the passed arguments are local to this function only 
    // so appending '0' to glocal minutes or hours or seconds will nott effect the other code 
    if(minutes <10){
        minutes = '0' + minutes;
    }
    if(seconds <10){
        seconds = '0' + seconds;
    }
    if(hours <10){
        hours = '0' + hours;
    }

    // this code there displays the values using template literals 
    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
}
