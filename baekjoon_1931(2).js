

var input= [
    [1,4],
    [3,5],
    [0,6],
    [5,7],
    [3,8],
    [5,9],
    [6,10],
    [8,11],
    [8,12],
    [2,13],
    [12,14]

]
solution();
function solution(){

    input.sort((a,b)=>{
        if(a[1]-b[1]===0){
            return a[0]-b[0];
        }else{
           return a[1]-b[1]
        }
    });

    input.forEach((element)=>{
        JeaGi()
    });

    function JeaGi([],value){

    }
    console.log(input);
}