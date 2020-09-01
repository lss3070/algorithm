


let numberLit="";
let tempArray=[];
test("17");
function test(numbers){
     let numberList = numbers.split("");
    let resultList =[];

    tempArray= JaeGi2(numberList,"");
   
    console.log( [...new Set(tempArray)].length); 
}

function JaeGi(arr,str){
    let frStr = str||"";
    return arr.reduce((preNums,now,i)=>{
        preNums.push(frStr+now);

        let nexNum=[...arr];
        nexNum.splice(i,1);
    
        let result = JaeGi(nexNum,frStr+now)
        console.log(...result+"...들어감");
        preNums.push(...result);
        console.log(preNums+"preNums 리턴");
        return preNums;
    },[]);
}

function JaeGi2(arr,str){
    str=str||"";
    return arr.reduce((numList,nowNum,i)=>{
        if(isPrime(str+nowNum)){
             numList.push(str+nowNum);
        }
        
        let preList = [...numList];
        preList.splice(i,1);
        
        let result = JaeGi2(preList,str+nowNum);
        numList.push(...result)
        
        return numList;
    },[]);
}

function isPrime(n) {
    if (n <= 0) {
      return false;
    }
    let divisor = 2;
    while (n > divisor) {
      if (n % divisor === 0) {
        return false;
      }
      divisor++;
    }
    return true;
  }
