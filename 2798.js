

test();
function test(){

    let inputlist= new Array();
    inputlist.push("10 500");
    inputlist.push("93 181 245 214 315 36 185 138 216 295");

    let checkValue=0;
    let tempValue=0;

    let maxValue= inputlist[0].split(" ")[1];
    let bottomValueList= inputlist[1].split(" ");

    for (let i = 0; i < bottomValueList.length-2; i++) {
        for (let j = i+1; j < bottomValueList.length-1; j++) {
            for(let k=j+1;k<bottomValueList.length;k++){
                    tempValue= parseInt(bottomValueList[i])+
                    parseInt(bottomValueList[j])+parseInt(bottomValueList[k]);
                    checkValue= tempValue<=parseInt(maxValue)&& tempValue>checkValue? tempValue:checkValue;
            
            }
        }
    }
    console.log(checkValue);
}