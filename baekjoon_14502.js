
let input="7 7\n\
2 0 0 0 1 1 0\n\
0 0 1 0 1 2 0\n\
0 1 1 0 1 0 0\n\
0 1 0 0 0 0 0\n\
0 0 0 0 0 1 1\n\
0 1 0 0 0 0 0\n\
0 1 0 0 0 0 0".split("\n");

let xarea=[0,1,0,-1];
let yarea=[-1,0,1,0];
let room;
let length;

solution();

function solution(){
   length=input.shift().split(" ").map(e=>+e)[0];


    room = input.map(e=>{
       return e.split(" ").map(e=>+e);
    })  


   
    let queue=[];
    
    for(let i=0;i<length;i++){
        for(let j=0; j<length;i++){
            if(room[i][j]==2&&check(i,j)){
                queue.push([i,j]);
               let aa= BFS(queue);
               console.log(aa);
            }
        }
    }
    
}

function DFS(x,y){
    if(cnt==3){
        BFS();
    }
    for(let i=x;i<length;i++){
        
    }

}
function BFS(queue){
   let now= queue.shift();
   let result;

   for(let i=0;i<xarea.length;i++){
        let dX=  now[0]+xarea[i];
        let dY = now[1]+yarea[i];

        if(check(dX,dY)){
            if(room[dX][dY]==0&&!QueCheck(queue,dX,dY)){
                room[dX][dY]=2;
                queue.push([dX,dY]);
               result= BFS(queue);
            }
        }
  
   }

   if(queue.length==0){
        result= room.reduce((pre,cur)=>{
          return pre+(cur.filter(e=>e==0).length);
        },0)
   }

   return result;
}


function check(x,y){
    if((x>=0)&&(y>=0)&&(x<length)&&(y<length)){
        return true
    }else return false;
}


function QueCheck(queue,x,y){
    queue.forEach(e=>{
        if(e[0]==x&&e[1]==y) return true;
    })
    return false;
}

