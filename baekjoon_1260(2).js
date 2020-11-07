
// var input ="1000 10 4\n\
// 4 1000\n\
// 1000 1\n\
// 1000 2\n\
// 1000 3\n\
// 1000 4\n\
// 4 500\n\
// 4 600\n\
// 2 5\n\
// 5 9\n\
// 1 24".split('\n');


// let input= "5 5 3\n\
// 5 4\n\
// 5 2\n\
// 1 2\n\
// 3 4\n\
// 3 1".split("\n");


let input="13 32 1\n\
3 10\n\
3 7\n\
6 1\n\
8 5\n\
8 11\n\
5 1\n\
9 11\n\
10 5\n\
12 3\n\
5 9\n\
6 8\n\
2 5\n\
4 7\n\
13 4\n\
4 3\n\
11 12\n\
3 11\n\
10 13\n\
12 4\n\
4 11\n\
4 10\n\
10 2\n\
9 3\n\
7 1\n\
11 2\n\
6 11\n\
12 10\n\
11 7\n\
6 4\n\
12 9\n\
8 13\n\
6 5".split("\n")

var length;
var startpoint;
var dfslist=[];
var bfslist=[];

solution();
function solution(){
    startpoint=parseInt(input.shift().split(" ")[2]);

    input= input.map(element=>{
        return [parseInt(element.split(" ")[0]),parseInt(element.split(" ")[1])];
    })

    input.sort((a,b)=>{
        if(a[0]==b[0]){
            return a[1]-b[1];
        }else
            return a[0]-b[0];
    });

    
    dfs([],[startpoint]);
    bfs([],[startpoint],0);
    console.log(dfslist.join(" "));
    console.log(bfslist.join(" "));
}

function dfs(array,valuelist){
    valuelist = Array.from(new Set(valuelist));  
    let value = valuelist.shift()
    array.push(value);
    let tmp=[]
    input.some(element=>{
        if(element[0]==value&&!array.includes(element[1]))
            tmp.push(element[1]);
        
        if(element[1]==value&&!array.includes(element[0]))
            tmp.push(element[0]);
        
    });   
    tmp.sort((a,b)=>a-b);
    if(tmp.length==0)tmp =valuelist
    else tmp =tmp.concat(valuelist);
    
    if(tmp.length!=0) dfs(array,tmp);
    else dfslist= array;
    
}

function bfs(array,bfsq,index){
    let tmplist=[]
    bfsq.forEach(element=>{
        array.push(element);
    });
  
        input.forEach(ielement=>{
            if(ielement[0]==array[index]&&!array.includes(ielement[1])&&!tmplist.includes(ielement[1]))
                tmplist.push(ielement[1])
            if(ielement[1]==array[index]&&!array.includes(ielement[0])&&!tmplist.includes(ielement[0]))
                tmplist.push(ielement[0]);
        });
   
    index++;

    tmplist.sort((a,b)=>a-b);
    if(tmplist.length==0&& array.length==index) bfslist=array
    else bfs(array,tmplist,index);
}



// https://www.acmicpc.net/board/view/58592 반례..
//https://www.acmicpc.net/board/view/27269 반례참조