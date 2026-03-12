let a=[1,2,1,2,3,4,5,3,2,1]
let b=[... new Set(a)]
console.log(b);

//Approach-2
let c=[]
for(let ele of a){
  if(!c.includes(ele)){
    c.push(ele)
  }
}
console.log(b);
