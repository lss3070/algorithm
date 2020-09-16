
solution([[0, 7], [1, 9], [2, 6]])
function solution(jobs) {
    jobs.sort((a,b)=>{
    return a[0]>b[0]? 1:-1
})
    let jobslength=jobs.length;
let result=[];
jobs.forEach((element)=>{
    element = element.push(0);
})
let nowrequest = jobs.shift();
    let count=0;
    result.push(nowrequest[1]);
    
    while(true){
         count++;
        if(nowrequest[0]<=count){
            nowrequest[1]-=1;
            jobs.forEach((element)=>{
                if(count>element[0]){
                    element[2]+=1;
                }
            });
        }
  

        if(nowrequest[1]<=0){
            let check =false;
            jobs.forEach((element)=>{
                if(element[1]>=count)check=true;
            })
            if(check){
                let restart= jobs.reduce((pre,cur,i)=>{
                    let sum = cur[1]+cur[2]
                   return pre[0]>sum? [sum,i]:pre 
                },[999,0]);
                nowrequest=jobs[restart[1]]
                jobs.splice(restart[1],1);
                result.push(restart[0]);
            }
        }
        if(jobs.length===0) break;
        
    }
    console.log(result.reduce((a,b)=>a+b,0)/jobslength);
    return result.reduce((a,b)=>a+b,0)/jobslength;
}
//해설 추가..