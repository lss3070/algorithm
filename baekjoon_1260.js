 var input ="4 5 1\n\
1 2\n\
1 3\n\
1 4\n\
2 4\n\
3 4\n\
".split('\n');

// var input ="3 2 1\n\
// 2 3\n\
// 1 2".split('\n');

 var firstline;
 var inputlist=[];

solution();

function solution(){

    firstline= input.shift().split(" ");
    for(let i=0;i<input.length;i++){
        const [start,end] = input[i].split(" ");
        inputlist.push([+start,+end]);
    }
    inputlist.sort((a,b)=>{
        return a[0]-b[0];
    });
    

    if(inputlist.length===1){
        let temp =[];
        inputlist = inputlist[0]

        if(firstline==inputlist[0]){
            console.log(inputlist.join(' '));
            console.log(inputlist.join(' '));
        }else{
            console.log(inputlist.reverse().join(" "));
            console.log(inputlist.join(" "));
        }  
     
    }else{
        console.log(dfs([],parseInt(firstline[2])).join(' '));
        console.log(bfs([],parseInt(firstline[2])).join(' '));
    }
}

function dfs(pre,value){

    pre.push(value);
    inputlist.forEach((element)=>{
        if(element[0]==value&&!pre.includes(element[1])){
           pre =dfs(pre,element[1]);
        }
    });
    return pre

}
function bfs(pre,value){
    let templist=[];
     inputlist.forEach((element)=>{
         if(element[0]==value&&!pre.includes(element[1])){
            templist.push(element[1]);
            pre.push(element[1]);
         }
     });

     templist.forEach((element)=>{
        pre = bfs(pre,element);
     })
     return pre;
}