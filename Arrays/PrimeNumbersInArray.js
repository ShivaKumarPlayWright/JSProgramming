let a = [ 2, 3, 4, 5, 6, 7, 8, 9]
let result=[]
for (let ele of a) {
    let count=0;
    for (let i = 1; i <= ele; i++) {
        if (ele % i == 0) {
            count++;
        }
    }
    if(count==2){
        result.push(ele)
    }
}
console.log(result);


