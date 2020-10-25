
 var input ="4 5 1\n\
1 2\n\
1 3\n\
1 4\n\
2 4\n\
3 4".split('\n');


solution();


function solution(){
    input.shift();
    input= input.map(element=>{
        return [parseInt(element.split(" ")[0]),parseInt(element.split(" ")[1])];
    })
    input.sort((a,b)=>{
        if(a[0]==b[0]){
            return a[1]-b[1];
        }else
            return a[0]-b[0];
    });
    let hsMap= new Map();
    input.forEach(element => {
        hsMap.set(element[0],element[0]);
        hsMap.set(element[1],element[1]);
    });

console.log(input[0][0]);
   dfs([],input[0][0]);
    bfs();
}

function dfs(array,value){
    array.push(value);

    let tmp
    input.some(element=>{
        if(element[0]==value){
            tmp=element[1]
           return element[1];
        }
        if(element[1]==value){
            tmp=element[0];
            return element[0];
        }
    })   
    dfs(array,tmp);
}
function bfs(){

}