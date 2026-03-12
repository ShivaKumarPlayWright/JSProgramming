let a=[1,2,3,4,5,6,7]
let oddSum=0
for(let ele of a){
    if(ele%2!=0){
        oddSum=oddSum+ele
    }
}
console.log(oddSum);
