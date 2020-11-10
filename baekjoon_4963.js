let input="1 1\n\
0\n\
2 2\n\
0 1\n\
1 0\n\
3 2\n\
1 1 1\n\
1 1 1\n\
5 4\n\
1 0 1 0 0\n\
1 0 0 0 0\n\
1 0 1 0 1\n\
1 0 0 1 0\n\
5 4\n\
1 1 1 0 1\n\
1 0 1 0 1\n\
1 0 1 0 1\n\
1 0 1 1 1\n\
5 5\n\
1 0 1 0 1\n\
0 0 0 0 0\n\
1 0 1 0 1\n\
0 0 0 0 0\n\
1 0 1 0 1\n\
0 0".split("\n");


solution();

function solution(){

    let boolList=[];
    let islandList = [];
    let array=[];
    let check=0;
    input.forEach((e,i)=>{
        if(i==0){
            //체크리스트
            boolList.push(Array.from(Array(parseInt(e.split(" ")[1])),
            ()=>new Array(parseInt(e.split(" ")[0])).fill(false)));

            check+=parseInt(e.split(" ")[1])+1
        }else if(i==check&&i!=0){
            //체크리스트
            boolList.push(Array.from(Array(parseInt(e.split(" ")[1])),
            ()=>new Array(parseInt(e.split(" ")[0])).fill(false)));

            islandList.push(array);
            check+=parseInt(e.split(" ")[1])+1
            array =[];
        }else{
            array.push(e.split(" ").map(e=>parseInt(e)));
        }
    });
    islandList.forEach((e,i)=>{
        console.log(checkvalue(e,boolList[i]));
    });
}

function checkvalue(ori,checklist){
    let count=0;
    if(ori.length==1&&ori[0].length==1){
        return count;
    }else{
        for(let i=0;i<ori.length;i++){
            for(let j=0;j<ori[i].length;j++){
            if(ori[i][j]==1&&checklist[i][j]==false){
                count++;
                checklist[i][j]=true;
                Jeagi(ori,checklist,i,j);
            }
            }
        }
    }
    return count
}

function Jeagi(ori,checklist,x,y){
    for(let i=-1;i<=1;i++){
        for(let j=-1;j<=1;j++){
            if(x+i>=0&&y+j>=0&&
                x+i<ori.length&&y+j<ori[0].length){
                if(ori[x+i][y+j]==1&&checklist[x+i][y+j]==false){
                    checklist[x+i][y+j]=true
                    Jeagi(ori,checklist,x+i,y+j);
                }
            }
           
        }
    }
}
