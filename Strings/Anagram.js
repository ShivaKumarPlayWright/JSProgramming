//Approach-1
let str1="Loop",str2="Pool"
let s1=str1.toLowerCase().split("").sort().join("")
let s2=str2.toLowerCase().split("").sort().join("")
 console.log(s1===s2 ? "Anagram" : "not Anagram")

//Approach-2
function sorting(strValue) {
    let ch=strValue.split("")
    for(let i=0;i<ch.length;i++){
        for(let j=i+1;j<ch.length;j++){
            if(ch[i]>ch[j]){
                let temp=ch[i]
                ch[i]=ch[j]
                ch[j]=temp
            }
        }
    }
    return ch
}
function convertLowerCase(strValue) {
    let result=""
    for(let ch of strValue){      
       if(ch>='A'&&ch<='Z'){
          result=result+String.fromCharCode(ch.charCodeAt(0)+32)
       }else{
            result=result+ch
       }
    }
    return result
}
function isAnagram(str1,str2) {
    if(str1.length!=str2.length){
        return "Not Anagram"
    }
    let s1=convertLowerCase(str1) , s2=convertLowerCase(str2)
    s1=sorting(s1) ,s2=sorting(s2)
    for(let i=0;i<s1.length;i++){
        if(s1[i]!=s2[i]){
            return "Not Anagram"
        }
    }
    return "Anagram"
}
console.log(isAnagram("Loop","Pool"));

