let a=[1,2,4,5,6,6,7,8,9,10]
let even=[],odd=[]
for(let ele of a){
    if(ele%2==0){
        even.push(ele)
    }else{
        odd.push(ele)
    }
}
console.log(even);
console.log(odd);


