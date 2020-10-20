
let number="99991"
let k=3;

let resultlist=[];
let templist=[]
solution();
function solution(){
    let numberlist= number.split("");

    numberlist.forEach(element => {
        resultlist.push(parseInt(element));
        if(resultlist[resultlist.length-1]>resultlist[resultlist.length-2]){
            while(true){
                if(resultlist[resultlist.length-1]>resultlist[resultlist.length-2]&&templist.length!=k){
                    let big= resultlist.pop();
                    let small =resultlist.pop();
                    resultlist.push(big);
                    templist.push(small);
                }else
                    break;
            }
        }
    });
    console.log(resultlist);
}