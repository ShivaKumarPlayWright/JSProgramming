let str="JavaScript",result=""
for(let ch of str){
    if(!"aeiou".includes(ch)){
        result=result+ch
    }
}
console.log(result);
