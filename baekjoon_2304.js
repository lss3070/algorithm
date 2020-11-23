let input="5\n\
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
    input = input.map(e=>e.split(" ").map(e=>+e));
   input.sort((a,b)=>{
        if(a[0]==b[0]){
           return a[1]-b[1];
        }else{
           return a[0]-b[0];
        }
    });

    let maxValue= input.reduce((pre,cur)=>{
        return pre[1]<cur[1]?cur:pre;
    },[0,0])

    let lValue = input[0][0]
    input.forEach(e=>highlength.push(e[1]));


    let l=0;
    let l2=1;
    while(l<input.indexOf(maxValue)){
        if(input[l2][1]>input[l][1]){
            answer+=(input[l][1]*(input[l2][0]-input[l][0]));
            l=l2;
            l2+=1;
        }else{
            l2+=1;
            if(input.length<=l2) break;
        }
    }

    let r =input.length-1;
    let r2 = input.length-2;
    while(r>input.indexOf(maxValue)){
        if(input[r][1]<input[r2][1]){
            answer+=(input[r][1]*(input[r][0]-input[r2][0]));
            r=r2;
            r2-=1;
        }else{
            r2-=1;
            if(r2<0)break;
        }
    }

    input.forEach(e=>{
        if(e[1]==maxValue[1]) count++;
    })

    console.log(answer+(maxValue[1]*count));
}