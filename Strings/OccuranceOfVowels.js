let str="JavaScript"
let vowels={ a:0,e:0,i:0,o:0,u:0}
for(let ch of str.toLowerCase()){
    if(ch in vowels){
        vowels[ch]++
    }
}
console.log(vowels);
