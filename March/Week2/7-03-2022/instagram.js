function profile(){

    const home = document.getElementById("homescreen");
    home.style.display = "none";

    const insta_reel = document.getElementById("reel_id");
    insta_reel.style.display="none";

    const insta_feed = document.getElementById("feed");
    insta_feed.style.display="none";

    const insta_search = document.getElementById("searchgrid");
    insta_search.style.display="none";

    const pfp = document.getElementById("profileid");
    pfp.style.display= "block" ;

}

function feeds(){
    const home = document.getElementById("homescreen");
    home.style.display = "none";

    const pfp = document.getElementById("profileid");
    pfp.style.display= "none" ;

    const insta_reel = document.getElementById("reel_id");
    insta_reel.style.display="none";

    const insta_search = document.getElementById("searchgrid");
    insta_search.style.display="none";

    const insta_feed = document.getElementById("feed");
    insta_feed.style.display="block";

}

function reelfn(){
    const home = document.getElementById("homescreen");
    home.style.display = "none";

    const pfp = document.getElementById("profileid");
    pfp.style.display= "none" ;

    const insta_feed = document.getElementById("feed");
    insta_feed.style.display="none";

    const insta_search = document.getElementById("searchgrid");
    insta_search.style.display="none";
    
    const insta_reel = document.getElementById("reel_id");
    insta_reel.style.display="block";
}

function searchfn(){
    const home = document.getElementById("homescreen");
    home.style.display = "none";

    const pfp = document.getElementById("profileid");
    pfp.style.display= "none" ;

    const insta_feed = document.getElementById("feed");
    insta_feed.style.display="none";
    
    const insta_reel = document.getElementById("reel_id");
    insta_reel.style.display="none";

    const insta_search = document.getElementById("searchgrid");
    insta_search.style.display="block";
}

function homefn(){
    const home = document.getElementById("homescreen");
    home.style.display = "block";

    const pfp = document.getElementById("profileid");
    pfp.style.display= "none" ;

    const insta_feed = document.getElementById("feed");
    insta_feed.style.display="none";
    
    const insta_reel = document.getElementById("reel_id");
    insta_reel.style.display="none";

    const insta_search = document.getElementById("searchgrid");
    insta_search.style.display="none";

}

const btn = document.getElementById("user1");

const fn = function() {
    let show = document.getElementById("showusers"); 

    if (show.style.display == "block")
    {
        show.style.display = "none";
    }
    else{
        show.style.display = "block";
    }
}

btn.addEventListener("click", fn);