
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

let nowrequest = jobs.shift();
    let count=0;
    result.push(nowrequest[1]);

    while(true){
        
        if(nowrequest[0]<=count){
            nowrequest[1]-=1;
            jobs.forEach((element)=>{
                if(count>=element[0]){
                    element[2]+=1;
                }
            });
        }
  

        if(nowrequest[1]===0){
            let check =false;
            jobs.forEach((element)=>{
                if(element[0]<=count)check=true;
            })
            if(check){
                let restart= jobs.reduce((pre,cur,i)=>{
                    let sum = cur[1]+cur[2]
                   return pre[0]>sum? [sum,i]:pre 
                },[100,0]);
                nowrequest=jobs[restart[1]]
                jobs.splice(restart[1],1);
                result.push(restart[0]);
            }
        }
        if(jobs.length==0) break;
        count++;
    }
    console.log(Math.floor(result.reduce((a,b)=>a+b,0)/jobslength));
    return result.reduce((a,b)=>a+b,0);
}

//초카운트다운은 지속
//[대기시간기준,현재 초 운영중일경우 1씩 깍임,대기시간]