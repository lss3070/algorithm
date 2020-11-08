

let input="6 8\n\
1 2\n\
2 5\n\
5 1\n\
3 4\n\
4 6\n\
5 4\n\
2 4\n\
2 3".split("\n");

var nodecount =input.shift().split(" ");

var visitlist = new Array(1001);
var graphlist = new Array(1001);

solution();
function solution(){
let answer=0;
 
    for(let i=0;i<input.length;i++){
        let from =  parseInt(input[i].split(" ")[0]);
        let to= parseInt(input[i].split(" ")[1]);

        if(graphlist[from]==null){
            graphlist[from]=[to];
        }else{
            graphlist[from].push(to);
        }

        if(graphlist[to]==null){
            graphlist[to]=[from]
        }else{
            graphlist[to].push(from);
        }
    }

    for(let i=1; i<=parseInt(nodecount[0]);i++){
        if(!visitlist[i]){
            dfs(i);
            answer++
        }
    }

    console.log(answer);
}


function dfs(x){
    visitlist[x]=true;
        for(let i =0; i<graphlist[x].length;i++){
            let y = graphlist[x][i];
            if(!visitlist[y]) dfs(y);
        }
    

}
