let str="amma",rev=""
for(let i=str.length-1;i>=0;i--){
   rev=rev+str[i]
}
console.log( str===rev ? "Palindrome ":" not palindrome");
