//Approach-1
let str="Programming",result=""
for(let i=0;i<str.length;i++){
    if(!result.includes(str[i])){
        result=result+str[i]
    }
}
console.log(result);


//Approach-2 using set 
/*set stores only unique elements
... spread operator convert set object into an array
join() convert array into string */
let result_1=[... new Set(str)].join("")
console.log(result_1);
