
let input="9\n\
10 3\n\
7\n\
1 2\n\
1 3\n\
2 7\n\
2 8\n\
2 9\n\
4 5\n\
4 6".split("\n");

// let input ="5\n\
// 2 5\n\
// 4\n\
// 1 2\n\
// 1 3\n\
// 4 3\n\
// 4 5".split('\n');

var dummy=[];
var max;
var min;
var answer;

solution();
function solution(){
    let length= input.shift();
    let values = input.shift().split(" ").map(e=>+e);
    
    if(values[0]>values[1]){
        max = values[0];
        min =values[1];
    }else{
        max = values[1];
        min = values[0];
    }
    dummy.push(min);

    input.shift();

    input = input.map(e=>{
        return e.split(" ").map(e=>+e);
    })
    

    console.log(checkLoop(min,1));
    // if(answer===undefined)
    //     console.log(-1);
    // else console.log(answer);
}

function checkLoop(now,count){

  
    if(now===max){
        answer=dummy.length-1;
        return answer;
    }else{
        input.forEach(element=>{
                if(element[0]==now&&!dummy.includes(element[1])){
                    dummy.push(element[1]);
                   answer= checkLoop(element[1],count)
                }
               if(element[1]==now&&!dummy.includes(element[0])){ 
                    dummy.push(element[0]);  
                   answer= checkLoop(element[0],max);
                }
          });
    }
}