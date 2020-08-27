
test();

function test(){
    let inputlist = new Array();
    inputlist.push("5");
    inputlist.push("55 185");
    inputlist.push("58 183");
    inputlist.push("88 186");
    inputlist.push("60 175");
    inputlist.push("46 155");


    let compareElement = new Array(); 
    let seqArray = new Array();
    for (let index = 0; index < Number(inputlist[0]); index++) {
    
        let seq = Number(inputlist[0]);
        compareElement=inputlist[index+1].split(" ");
        for (let j = 0; j <  Number(inputlist[0]); j++) {
            let tempElement = inputlist[j+1].split(" ");
            if(j==index){

            }else if(tempElement[0]>compareElement[0] && tempElement[1]>compareElement[1]){
            //비교하는게 작을경우
           }else if(tempElement[0]<compareElement[0] && tempElement[1]<compareElement[1]){
            //비교하는게 클경우
            seq -=1;
           }else{
            seq-=1;
           }
        }
        seqArray.push(seq);
    }
    console.log(seqArray.toString().replace(/,/gi,' '));
}