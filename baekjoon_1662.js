
let input ="2(45(2)6(3))";

solution();
function solution(){

    let inputArray = input.split("");

    let valueArray =[]
    inputArray.reduce((pre,cur)=>{
        if(cur=="("||cur==")"){
            if(pre!=""){
                valueArray.push(pre);
                valueArray.push(cur);
                return ""
            }else{
                valueArray.push(cur);
                return ""
            }
        }else{
           return pre+cur;
        }
    },"");

    let notnumberArray=[];
    let numberArray =[];
    let answer="";

    for(let i =0;i<valueArray.length;i++){
        if(valueArray[i]=="("){
            notnumberArray.push(i);
        }else if(valueArray[i]==")"){
            
            answer+=JeaGi(numberArray);
            numberArray=[];
        }else{
            numberArray.push(valueArray[i])
        }
    }
    console.log(answer.length);
}

function JeaGi(numberArray){
    if(numberArray.length>1){
        let back=numberArray.pop().toString();
        let front = numberArray.pop().toString();
        let frontArray= front.split("");

        let length= parseInt(frontArray.pop());
        let temp="";
        for(let i=1;i<=length;i++){
            temp+=back;
        }
       frontArray.push(temp)

        numberArray.push(frontArray.join(''));

       return JeaGi(numberArray);
    }else{
        if(numberArray.length==0){
            return "";
        }else{
            return numberArray.pop();
        }
    }
}

// 33(562(71(9)))
// 33(562(79))
// 33(527979)
// 3527979527979527979