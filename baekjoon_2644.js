
let input="9\n\
7 3\n\
7\n\
1 2\n\
1 3\n\
2 7\n\
2 8\n\
2 9\n\
4 5\n\
4 6".split("\n");

solution();
function solution(){

    let length= parseInt(input.shift());
    let values=input.shift().split(" ").map(e=>parseInt(e));
    let m = input.shift();

    let hsMap = new Map();
    input.forEach(e=>{
        if(hsMap.get(e.split(" ")[0])==null){
            hsMap.set(e.split(" ")[0],e.split(" ")[0]);
        }
        hsMap.set(e.split(" ")[1],e.split(" ")[0]);
    });

    let first = values[0];

    while(true){
        
    }
}