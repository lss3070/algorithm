let input =5;
let count =0;

let resultArray=new Array();

test();
function test(){
    moveHanoiTower(1,2,3,input);
    showResult();
}

function moveHanoiTower(first,center,last,n){
    if(n==1){
        ++count
        resultArray.push(first+" "+last);
    }else{
        moveHanoiTower(first,last,center,n-1);
        ++count;
        resultArray.push(first+" "+last);
        moveHanoiTower(center,first,last,n-1);
    }
}
function showResult(){
    console.log(count);
    resultArray.forEach(element=>{
        console.log(element);
    })
}