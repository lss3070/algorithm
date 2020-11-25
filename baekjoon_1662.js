
// let input ="2(45(2)6(3))";
let input="33(562(71(9)))";

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
            notnumberArray.push(valueArray[i]);
        }else if(valueArray[i]==")"){

            notnumberArray.pop();
            let back =numberArray.pop();
            let front = numberArray.pop();

            let frontArray= front.split("");
            let length= parseInt(frontArray.pop());
                let temp="";
            for(let i=1;i<=length;i++){
                temp+=back;
            }
            frontArray.push(temp);

            if(numberArray.length>notnumberArray.length){
                numberArray.push(numberArray.pop()+frontArray.join(""));
            }else{
                numberArray.push(frontArray.join(""));
            }
        }else{
            numberArray.push(valueArray[i])
        }
    }
    console.log(numberArray[0].length);
}
