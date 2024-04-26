const hour = document.querySelector('#hour');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');


let sec = 0;
let min = 0;

function startWatch (){
    setInterval(function(){
        sec += 1
        seconds.innerHTML = sec

        if (sec === 60) {
            sec = 0
            seconds.innerHTML = 0

            min =+ 1
            minutes.innerHTML = min
            
        }
    } , 100);

    

}

function stopInterval(){
    clearInterval(seconds);
}