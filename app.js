const hour = document.querySelector('#hour');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');
const mili = document.querySelector('#milisec');


let milisec = 0;
let sec = 0;
let min = 0;
let houur = 0;
let startInterval ;


function startWatch (){
    clearInterval(startInterval)
    startInterval =  setInterval(function(){
        milisec += 1
        mili.innerHTML = milisec

        if (milisec === 100) {
            milisec = 0
            mili.innerHTML = 0
            
            sec += 1
            seconds.innerHTML = sec

            if (sec === 60) {
                sec = 0
                seconds.innerHTML = sec

                min += 1
                minutes.innerHTML = min

            }
            if (min === 60) {
                min = 0
                min.innerHTML = min

                houur += 1
                hour.innerHTML = houur
            }
            
        }
    } , 10);

    

}



function stopInterval(){
    clearInterval(startInterval);
}


function resetWatch() {
    milisec = 0
    sec = 0
    min = 0
    houur = 0
    mili.innerHTML = 0
    seconds.innerHTML = 0
    minutes.innerHTML = 0
    hour.innerHTML = 0
    clearInterval(startInterval);
}





