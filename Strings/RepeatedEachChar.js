//	Print Repeated each Character Count in string
let str="JavaScript Automation Test Engineer"
    let count={};
    for(let ch of str){
        if(count[ch]){
           count[ch]++
        }else{
            count[ch]=1
        }
    }

    for(let key in count){
        if(count[key]>1){
            console.log(key+"--------->"+count[key]);
            
        }
    }

