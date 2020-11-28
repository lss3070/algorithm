let input ="4 6\n\
101111\n\
101010\n\
101011\n\
111011".split("\n");


let xMo=[0,1,0,-1];
let yMo=[-1,0,1,0];

let length;
let result;

let end;

solution();

function solution(){
    end= input.shift().split(" ").map(e=>+e);


   input= input.map(e=>e.split("").map(e=>+e));
   length=[input.length-1,input[0].length-1];

    let queue =[]
    queue.push([0,0]);

    result= BFS(queue,[],1);
    console.log(result);
}

function BFS(queue,visitlist,depth){
    let result=999;
    queueNext=[];

while(queue.length>0){
    let now= queue.shift();
    visitlist.push(now);
    if(now[0]==end[0]&&now[1]==end[1]){
     result = Math.min(r,depth);
     break;
    }
 
     for(let i=0;i<xMo.length;i++){
         let dX= now[0]+xMo[i];
         let dY= now[1]+yMo[i];
 
         if(overcheck(dX,dY)&&queueCheck(visitlist,dX,dY)){
             if(queueCheck(queue,dX,dY)&&input[dX][dY]==1){
                 queueNext.push([dX,dY]);
             }
         }
     }
}
s

    if(queueNext.length>0){
        result = Math.min(result,BFS(queueNext,visitlist,depth+1));
    }
    return result;
}

function overcheck(x,y){
    if(x>=0&&y>=0&&x<length[0]&&y<length[1]){
        return true;
    }else return false;
}

function queueCheck(queue,x,y){

    
    queue.forEach(e => {
        if(e[0]===x&&e[1]===y){
            return false;
        }
    });
    return true;
}

