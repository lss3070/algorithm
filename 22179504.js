
var input = [4,4];

 var commonArray=[];
var result=[];
solution();
function solution(){
    
    for(let i=1;i<=input[0];i++){
        commonArray.push(i)
    }
    
    test([],input[1]);
 result.forEach((element)=>{
   console.log(element.join(' '));
});
}

function test(outputarray,col){
    if(outputarray.length===col) {
        result.push(outputarray);
        return;
    };

    commonArray.reduce((preArray,value,i)=>{
        preArray=[...outputarray];
        if(preArray.indexOf(value)==-1){
            preArray.push(value);
        test(preArray,col);
        }
    },[]);
}