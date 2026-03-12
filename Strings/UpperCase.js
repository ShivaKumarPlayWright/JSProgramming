let str="JavaScript Programmer";
let char=""
for(let ch of str){
    if(ch>='A' && ch<='Z'){
        char=char+"T"
    }else{
        char=char+ch
    }
}
console.log(char);
