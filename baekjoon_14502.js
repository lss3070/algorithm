
let input="7 7\n\
2 0 0 0 1 1 0\n\
0 0 1 0 1 2 0\n\
0 1 1 0 1 0 0\n\
0 1 0 0 0 0 0\n\
0 0 0 0 0 1 1\n\
0 1 0 0 0 0 0\n\
0 1 0 0 0 0 0".split("\n");

let xarea=[0,1,0,-1];
let yarea=[-1,0,1,0];

solution();

function solution(){
    input.shift();

    let room = input.map(e=>{
       return e.split(" ").map(e=>+e);
    })  
   
    let queue=[];
    
    
}

function BFS(){

}