
test();

function test(){
    let inputlist = new Array();
    inputlist.push('1');
    inputlist.push('10');
    inputlist.push('13');
    inputlist.push('100');
    inputlist.push('1000');
    inputlist.push('10000');
    inputlist.push('100000');
    inputlist.push('0');

    inputlist.forEach(element => {
       element = Number(element);
        let count = 0;
       for(let i = element+1;i<=2*element;i++){
           if(numCheck(i)){
               count+=1;
           }
       }
       if(count!=0)
         console.log(count);
    });
}

function numCheck(element){
    if(element<2) return false;
    if(element===2) return true;
    for(let i =2;i <=Math.sqrt(element);i++){
        if(element%i==0) return false;
    }
    return true;
}