test();

function test(){
    
    let input = '3 16';
    let temp = input.split(' ');

    let i = temp[0];
    let j = temp[1];

    for (let index = Number(i); index < Number(j); index++) {
        if(numCheck(index)){
            console.log(index);
        }
    }
}

function numCheck(element){
    if(element<2) return false;
    if(element===2) return true;
    for(let i =2;i <=Math.sqrt(element);i++){
        if(element%i==0) return false;
    }
    return true;
}