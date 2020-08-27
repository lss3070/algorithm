test()

function test(){
    let inputlist = new Array();
    inputlist.push('64');
     inputlist.push('65');

     let m = inputlist[0];
     let n = inputlist[1];

    let sum =0;
    let min=10001;
    let check =false;

    for(let i =Number(m); i<=Number(n);i++){
        if(numCheck(i)){
            if(check==false) min = i
            check =true;
           sum += i;
        }
    }
    if(check==false){
        console.log(-1);
    }else{

        console.log(sum);
        console.log(min);
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