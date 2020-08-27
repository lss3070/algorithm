test();

function test(){
    let inputlist = new Array();
    inputlist.push("30 20");
    inputlist.push("10 20");
    inputlist.push("30 10");
    
    let fValue = new Array();
    let sValue = new Array();

    inputlist.forEach(element => {
        let first = element.split(" ")[0];
        let second = element.split(" ")[1];
        
        fValue.push(Number(first));
        sValue.push(Number(second));
        
    });
    fValue = fValue.slice().sort();
    sValue = sValue.slice().sort();
    
    let overlapvalue1 = checkoverlap(fValue);
    let overlapvalue2 = checkoverlap(sValue);
    
    fValue.splice(fValue.indexOf(overlapvalue1),1);
    fValue.splice(fValue.indexOf(overlapvalue1),1);
    sValue.splice(sValue.indexOf(overlapvalue2),1);
    sValue.splice(sValue.indexOf(overlapvalue2),1);

    console.log(fValue[0]+" "+sValue[0]);
}

function checkoverlap(array){
    let result;
    for(let i =0;i<=array.length;i++){
        if(array[i+1]==array[i]){
            result = array[i];
            return result;
        }
    }
}