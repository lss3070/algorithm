
let input ="2\n\
10 8 17\n\
0 0\n\
1 0\n\
1 1\n\
4 2\n\
4 3\n\
4 5\n\
2 4\n\
3 4\n\
7 4\n\
8 4\n\
9 4\n\
7 5\n\
8 5\n\
9 5\n\
7 6\n\
8 6\n\
9 6\n\
10 10 1\n\
5 5".split("\n");

solution();

function solution(){

    let count = input.shift();

    let cabbeage=[];
    let checklist;
    input.forEach((e,i)=>{

        if(i==0){
            let temp = e.split(" ").map(e=>+e);
            checklist= Array.from(Array(temp[1]),()=>new Array(temp[0]).fill(false));

        }else if(e.split(" ").length==3||i==input.length-1){
            let temp = e.split(" ").map(e=>+e);

            findDebug(cabbeage,0,0,0);
            checklist= Array.from(Array(temp[1]-1),()=>new Array(temp[0]).fill(false));
            cabbeage=[];
        }else{
            cabbeage.push(e.split(" ").map(e=>+e));
        }
    })
}

function findDebug(cabbeage,x,y,count){
    cabbeage.forEach((e,index)=>{
        for(let i=-1;i<2;i+=2){
            if(e.includes(x+i)&&e.includes(y)){
                cabbeage.splice(index,1);

               return findDebug(cabbeage,x+i,y,count);
            }
            if(e.includes(y+i)&&e.includes(x)){
                cabbeage.splice(index,1);

              return  findDebug(cabbeage,x,y+i,count);
            }
        }
    });
    if(cabbeage.length==0){
        return count;
    }else{
        count++;
        findDebug(cabbeage,cabbeage[0][0],cabbeage[0][1],count)
    }
}