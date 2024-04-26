const hour = document.querySelector('#hour');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');


let sec = 0;
let min = 0;
let houur = 0;

function startWatch (){
    setInterval(function(){
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
    } , 1000);

    

}

function stopInterval(){
    clearInterval(seconds);
}