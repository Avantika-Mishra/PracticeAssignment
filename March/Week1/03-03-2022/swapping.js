var a = 40;
var b = 50;
output = document.getElementById('output');

output.innerHTML = "<p>Original Number : "+a+", "+b+"</p>";
b = [a, a = b] [0];
output.innerHTML += "<p>After Swapping : "+a+", "+b+"</p>";



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "10") {
      x.innerHTML = "20";
    } else {
      x.innerHTML = "10";
    }
  }