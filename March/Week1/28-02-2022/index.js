function fizzBuzz(n) {
    let fizzBuzz = prompt("Enter Number");
    (n != NaN)
    
    for (i = 1; i <= fizzBuzz; i++) {
        if (i % 15 == 0 )
            document.write("fizzBuzz" + "<br/>")
        else if (i % 3 == 0)
            document.write("fizz" + " <br/>");
        else if (i % 5 == 0)
            document.write("buzz" + "<br/>");
        else
            document.write(i + "<br/>");
    }

}