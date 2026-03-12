let a=[9,8,7,1,2,8,9,1,2]
let count={}
for(let ele of a){
    if(count[ele]){
        count[ele]++
    }else{
        count[ele]=1
    }
}
console.log(count);
