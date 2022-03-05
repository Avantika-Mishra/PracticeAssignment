function color_changer(){
    var body = document.body;
    if(body.classList.contains("light")) {
        body.classList.replace("light","dark");  
    }
    else{
        body.classList.replace("dark","light");  
    }
}
function pop_up_show() {
    var subs = document.getElementById("main");
    var showbtn = document.getElementById("showpop_up_button");
    showbtn.classList.add("none");
    subs.classList.add("initial");
}
function pop_up_close() {
    var subs = document.getElementById("main");
    var showbtn = document.getElementById("showpop_up_button");
    showbtn.classList.remove("none");
    subs.classList.remove("initial");
}