
var input ="1000 10 4\n\
4 1000\n\
1000 1\n\
1000 2\n\
1000 3\n\
1000 4\n\
4 500\n\
4 600\n\
2 5\n\
5 9\n\
1 24".split('\n');

var length;
var startpoint;
var dfslist=[];
var bfslist=[];

solution();
function solution(){
    let tmp= input.shift();
   
    startpoint=parseInt(tmp.split(" ")[2]);
    input= input.map(element=>{
        return [parseInt(element.split(" ")[0]),parseInt(element.split(" ")[1])];
    })
    input.sort((a,b)=>{
        if(a[0]==b[0]){
            return a[1]-b[1];
        }else
            return a[0]-b[0];
    });

    
    let tmplength= [];
    input.forEach(element => {
        tmplength.push(element[0]);
        tmplength.push(element[1]);
    });
    tmplength=new Set(tmplength);

    length=tmplength.size;
    dfs([],startpoint);
    bfs([],[startpoint]);
    console.log(dfslist.join(" "));
    console.log(bfslist.join(" "));
}

function dfs(array,value){
    array.push(value);
    let tmp=null
    input.some(element=>{
        if(element[0]==value&&!array.includes(element[1])){
            tmp=element[1]
           return element[1];
        }
        if(element[1]==value&&!array.includes(element[0])){
            tmp=element[0];
            return element[0];
        }
    });   
    if(tmp!=null)dfs(array,tmp);
    else if(array.length==length){
        dfslist= array;
    }
}

function bfs(array,bfsq){
    let tmplist=[]
    
    bfsq.forEach(element=>{
        array.push(element);
    });
    bfsq.forEach(belement=>{
        input.forEach(ielement=>{
            if(ielement[0]==belement&&!array.includes(ielement[1])&&!tmplist.includes(ielement[1]))
                tmplist.push(ielement[1])
            if(ielement[1]==belement&&!array.includes(ielement[0])&&!tmplist.includes(ielement[0]))
                tmplist.push(ielement[0]);
        });
    });
    if(array.length==length) bfslist=array
    else  bfs(array,tmplist);
}

// https://www.acmicpc.net/board/view/58592 반례..