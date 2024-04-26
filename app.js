const hour = document.querySelector('#hour');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');


let sec = 0;
let min = 0;
let houur = 0;
let startInterval ;

function startWatch (){
    clearInterval(startInterval)
    startInterval =  setInterval(function(){
        sec += 1
        seconds.innerHTML = sec

        if (sec === 60) {
            sec = 0
            seconds.innerHTML = 0
            
            min += 1
            minutes.innerHTML = min

            if (min === 60) {
                min = 0
                minutes.innerHTML = min

                houur += 1
                hour.innerHTML = houur
            }
            
        }
    } , 100);

    

}

function stopInterval(){
    clearInterval(startInterval);
}


function resetWatch() {
    sec = 0
    min = 0
    houur = 0
    seconds.innerHTML = 0
    minutes.innerHTML = 0
    hour.innerHTML = 0
    clearInterval(startInterval);
}