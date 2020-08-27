test();



function test(){
    let inputlist = new Array();
    inputlist.push('3');
    inputlist.push('8');
    inputlist.push('10');
    inputlist.push('16');

    inputlist.forEach(element=>{
        element = Number(element);
        if(numCheck(element)!=true){
            
        }
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