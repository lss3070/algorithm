
let input ="9\n\
7 3\n\
7\n\
1 2\n\
1 3\n\
2 7\n\
2 8\n\
2 9\n\
4 5\n\
4 6".split("\n");

let dummy =[];
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
    });
    input.sort((a,b)=>{
       if(a[0]==b[0]){
           return a[1]-b[1];
       }else
        return a[0]-b[0];
    })

    console.log(input);
    checkLoop(dummy[dummy.length-1]);

}

function checkLoop(value){
    input.forEach(e=>{
        if(e[0]==value&&!dummy.includes(e[1])){
            dummy.push(e[1]);
            return checkLoop(value);
        }
        if(e[1]==value&&!dummy.includes(e[0])){
            dummy.push(e[0]);
        }
    })
}