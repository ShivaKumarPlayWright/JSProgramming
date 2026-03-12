//Approach-1
let str="javascript",vowel=0,cons=0
for(let i=0;i<str.length;i++){
    if(str[i]=='a' ||str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u'){
        vowel++
    }else{
        cons++;
    }
}
console.log(`Vowels ${vowel} and Consonants ${cons}`);

//Approach-2
let countCons=0,countVowel=0
for(let ch of str){
    if("aeiou".includes(ch)){
        countVowel++;
    }else{
        countCons++;
    }
}
console.log(`Vowels ${countVowel} and Consonants ${countCons}`);