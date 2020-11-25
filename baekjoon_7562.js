let input ="3\n\
8\n\
0 0\n\
7 0\n\
100\n\
0 0\n\
30 50\n\
10\n\
1 1\n\
1 1".split("\n");


let dx = [ -2, -1, 1, 2, 2, 1, -1, -2 ]; // x, y의 상대적 위치
let dy = [ 1, 2, 2, 1, -1, -2, -2 ,-1 ];
let map;
let length;
let end;
solution();


function solution(){
    let count = input.shift();
    let testcase =[];
    let testcaselist=[]
    input.forEach((e,i)=>{
        if((i+1)%3!==0){
            testcase.push(e);
        }else{
            testcase.push(e);
            testcaselist.push(testcase);
            testcase=[];
        }
    })
    

    testcaselist.forEach(e=>{
        length =parseInt(e[0]);
        let start = e[1].split(" ");
        end = e[2].split(" ").map(e=>+e);

        map= Array.from(Array(length),()=>new Array(length).fill(0));
        let visited=[];
        map[start[0]][start[1]]=1;
        visited.push([start[0],start[1]]);

       let aa= BFS(visited,2);
       console.log(aa-1);
    })
}

function BFS(visited,depth){
    let r =999;
    let visitnext =[];

    while(visited.length>0){
      let yx = visited.shift();
      let sX = parseInt(yx[0]);
      let sY =parseInt(yx[1]);

      if(sX==end[0]&&sY===end[1]){
       r = Math.min(r,map[sX][sY]);
      }

      for(let i=0;i<dx.length;++i){
          let moveX = sX+dx[i];
          let moveY = sY+dy[i];

          if(check(moveX,moveY)&&map[moveX][moveY]==0){
            if(!QueCheck(visitnext,moveX,moveY)){
                visitnext.push([moveX,moveY]);
                map[moveX][moveY]=depth;
            }
          }
      }
    }
    if(visitnext.length>0){
        r = Math.min(r,BFS(visitnext,depth+1));
    }
    return r;
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