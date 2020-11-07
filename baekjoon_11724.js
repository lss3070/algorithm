

let input="6 5\n\
1 2\n\
2 5\n\
5 1\n\
3 4\n\
4 6".split("\n");

var nodecount =parseInt(input.shift().split(" ")[0]);
var visitlist = new Array(nodecount);
var graphlist = new Array(nodecount);

solution();
function solution(){

    while(input.length>0){
        let startpoint=parseInt(input[0][0]);
        count++;
        dfs([],[startpoint]);
    }
    console.log(count);
}


function dfs(x){
    visitlist[x]=true;
    for(let i =0; i<graphlist[x].length;i++){
        let y = graphlist[x][i];
        if(!visitlist[y]) dfs(y);
    }
}
