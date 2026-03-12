let a=[1,2,1,2,3,4,5,3,2,1]
let count={}
for(let ele of a){
    if(count[ele]){
        count[ele]++
    }else{
        count[ele]=1
    }
}
let duplicate=[]
for(let key in count){
    if(count[key]>1){
       duplicate.push(key)
    }
}
console.log(duplicate);
