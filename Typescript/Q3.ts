

let checkPalindrome=(str:string) =>{

   
    const len1= str.length;
    for (let i = 0; i < len1 / 2; i++) {

        
        if (str[i] !== str[len1- 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}




const value1 = checkPalindrome("naman");
const value2 = checkPalindrome("aman");
console.log(value1);
console.log(value2);