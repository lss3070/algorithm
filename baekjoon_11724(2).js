
let input="6 5\n\
1 2\n\
2 5\n\
5 1\n\
3 4\n\
4 6".split("\n");

solution();

function solution(){


    let map = new Map();
    let answer =0;
    let temp= input.shift().split(" ").map(e=>+e);
    let m = temp[0];    
    let n = temp[1];

    input = input.map(e=>{
       return e.split(" ").map(e=>+e);
    }); 

    

}