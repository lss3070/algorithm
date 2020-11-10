

// let input ="7\n\
// 0110100\n\
// 0110101\n\
// 1110101\n\
// 0000111\n\
// 0100000\n\
// 0111110\n\
// 0111000".split("\n");


let input ="5\n\
11011\n\
11011\n\
00000\n\
11011\n\
11011".split("\n");

let length= parseInt(input.shift());

var checklist;
var answerlist=[];

solution();


function solution(){
    let count=0;

    input = input.map(e=>e.split("").map(e=>+e));
    checklist =  Array.from(Array(length),()=>new Array(length).fill(false));


    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            if(input[i][j]==1&&checklist[i][j]==false){
                count++;
                answerlist.push(1);
                checklist[i][j]=true
                checkLoop(i,j,answerlist.length-1)
            }
        }
    }
    console.log(count);

    
    if(answerlist.length>0) {
        answerlist.sort((a,b)=>a-b);
        answerlist.forEach(e=> console.log(e));
    }
   
}

function checkLoop(x,y,index){

    for(let i=-1;i<2;i+=2){
        if(x+i>=0&&x+i<length){
            if(input[x+i][y]==1&&checklist[x+i][y]==false){
                checklist[x+i][y]=true
                answerlist[index]++
                checkLoop(x+i,y,index);
            }
        }
        if(y+i>=0&&y+i<length){
            if(input[x][y+i]==1&&checklist[x][y+i]==false){
                checklist[x][y+i]=true
                answerlist[index]++
                checkLoop(x,y+i,index);
            }
        }

        
    }

}

