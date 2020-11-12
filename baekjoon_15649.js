

let input=""
solution();

let n,m;
let array= new Array(n);


function solution(){
    n = input.split(" ")[0];
    m = input.split(" ")[1];

    for(let i=1;i<=n;i++){
        array[i-1]=i
    }

    let answer =[];
    for(let i=0;i<array.length;i++){
        backtraking(answer,array[i],i,m,array[i]);
    }
    


}

function backtraking(answer,current,temp,m,str){
    let array = str.split(" ");d
}d