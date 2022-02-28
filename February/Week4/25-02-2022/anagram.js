function checkStringsAnagram(a,b){
    let len1 =a.length;
    let len2 =b.length;
    if(len1 !== len2){
        document.write('Invalid input');
        return;
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        document.write("True");
    }
    else{
        document.write("False");
    }
}
checkStringsAnagram("fried","fired")
checkStringsAnagram("silent","listen")
checkStringsAnagram("race","care")
checkStringsAnagram("eat","tea")
