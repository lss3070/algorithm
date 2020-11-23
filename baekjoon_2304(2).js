let input="7\n\
1 11\n\
2 11\n\
3 11\n\
4 11\n\
5 11".split("\n");


solution();
function solution(){
    let count=0;
    let nowhigh=0;
    let highlength =[];
    let answer=0;
    input.shift();

    let stroage = new Array(1001).fill(0);
    input = input.map(e=>e.split(" ").map(e=>+e));
   input.sort((a,b)=>{
        if(a[0]==b[0]){
           return a[1]-b[1];
        }else{
           return a[0]-b[0];
        }
    });

    let width =[];
    let maxValue= input.reduce((pre,cur)=>{
        return pre[1]<=cur[1]?cur:pre;
    },[0,0])

    answer+=maxValue[1];

    let lValue = input[0][0]
    input.forEach(e=> stroage[e[0]]=e[1]);

    let start =0;

    width.push(0);
    for(let i=start;i<maxValue[0];i++){
        if(width[width.length-1]<stroage[i]){
            width.pop();
            width.push(stroage[i]);
        }
        answer+=width[width.length-1];
    }

    width=[];

    width.push(0);
    for (let i = input[input.length-1][0]; i > maxValue[0]; i--) { //기준 기둥의 오른쪽 넓이
        if(width[width.length-1]<stroage[i]){
            width.pop();
            width.push(stroage[i]);
        }
        answer+=width[width.length-1];
	}

    console.log(answer);
}