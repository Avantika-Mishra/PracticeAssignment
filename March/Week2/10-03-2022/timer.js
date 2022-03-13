let num = 3;
const min = document.getElementById("minute");
min.innerText = `${4}m`

const min_fn = function(){
    const mint = document.getElementById("minute");
    mint.innerText = `${num}m`;
    num -= 1; 

    if(num < 0){
        clearInterval(interval_min);
    }

    else{
        let a = 59;
// const element = document.getElementById('second');
// element.innerText = `${a}s`;
const second_fn = function() {
    const timer_element = document.getElementById('second');
    timer_element.innerText = `${a}s`;
    a -= 1;
    if(a < 0) {
        clearInterval(interval_id);
    }
}

const interval_id = setInterval(second_fn, 1000);
// const another_id = setTimeout(simple_fn, 1000);
// console.log(interval_id);
const stop = function() {
    //Something here.
    clearInterval(interval_id);
    // clearTimeout(another_id);
}

const stop_btn = document.getElementById('stop');
stop_btn.addEventListener('click', stop);
    }
}

const interval_min = setInterval(min_fn, 60000);


const stp_min = function() {

    clearInterval(interval_min);
}

const stp_btn = document.getElementById('stop');
stp_btn.addEventListener('click', stp_min);







let a = 59;
const element = document.getElementById('second');
element.innerText = `${60}s`;
const second_fn = function() {
    const timer_element = document.getElementById('second');
    timer_element.innerText = `${a}s`;
    a -= 1;
    if(a < 0) {
        clearInterval(interval_id);
    }
}

const interval_id = setInterval(second_fn, 1000);
// const another_id = setTimeout(simple_fn, 1000);
// console.log(interval_id);
const stop = function() {
    //Something here.
    clearInterval(interval_id);
    // clearTimeout(another_id);
}

const stop_btn = document.getElementById('stop');
stop_btn.addEventListener('click', stop);