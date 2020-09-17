
var jobs= [[0, 3], [1, 9], [2, 6]];
solution();
function solution(){
    let jobslength=jobs.length;
let result=[];
jobs.forEach((element)=>{
    element = element.push(0);
})
//요청시간을 기준으로 오름차순 정렬
jobs.sort((a,b)=>{
    return a[0]>b[0]? 1:-1
})

count=0;
let workingQue=[]
    while(true){
       
        jobs.forEach((element,i)=>{
            if(count>=element[0]){
                workingQue.push(element)
                jobs.splice(i,1);
            }
        });
        workingQue.sort((a,b)=>{
           return a[1]<b[1]?1:-1;
        })
        wor

        count++;
    }
    console.log(Math.floor(result.reduce((a,b)=>a+b,0)/jobslength));
    return result.reduce((a,b)=>a+b,0);
}

//초카운트다운은 지속
//[대기시간기준,현재 초 운영중일경우 1씩 깍임,대기시간]