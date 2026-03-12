//Approach-1
let str="java",rev=""
for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i]
}
console.log(rev);

//Approach-2 
let result_1=str.split("").reverse().join("")
console.log(result_1);
