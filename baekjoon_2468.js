
var input="5\n\
6 8 2 6 2\n\
3 2 3 4 6\n\
6 7 3 3 2\n\
7 2 5 3 6\n\
8 9 5 2 7".split('\n')

let w=parseInt(input.shift());
let h=w;
let depth =0;
solution();

function solution(){
    let result =[]
   
    input= input.map(e=>e.split(" ").map(e=>+e));

    let temp= [].concat.apply([],input);
    

    

    for(let c=0;c<100;c++){
        depth=c;
        let boolArray = Array.from(Array(h),()=>new Array(w).fill(false));
        let count=0;

        for(let i=0;i<h;i++){
            for(let j=0;j<w;j++){
                if(input[i][j]>depth&&boolArray[i][j]==false){
                    count++;
                    boolArray[i][j]=true;
                    checkLoop(input,boolArray,i,j);
                }
            }
        }
        result.push(count);
    }
    let e=0;
    result.reduce((pre,cur,i)=>{
        if(pre>cur){
            return pre;
        }else{
            e=i
            return cur;
        }
       
    });
    console.log(e);
}

function checkLoop(arr,charr,x,y){
    for(let i=-1;i<2;i++){
        if(x+i>=0&&x+i<h){
            if(arr[x+i][y]>depth&&charr[x+i][y]==false){
                charr[x+i][y]=true;
                checkLoop(arr,charr,x+i,y)
            }
        }
        if(y+i>=0&&y+i<w){
            if(arr[x][y+i]>depth&&charr[x][y+i]==false){
                charr[x][y+i]=true;
                checkLoop(arr,charr,x,y+i)
            }
        }
    }
}