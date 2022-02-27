function validatePalindrome(str){
    
    const len = String.length;

    //Use for loop to divide the words into 2 half 
    for(let i=0;i<len / 2;i++){

        
        if(String[i] !== String[len -1 -i]){
            alert('It is not a Pallindrome');
            }
        }
        alert('It is a Pallindrome');
    }
    //accept sring or number from prompt
    const String = prompt('Enter a string or number');

    const value =validatePalindrome(String);

    console.log(value);

