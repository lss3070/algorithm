function solution(progresses, speeds) {
    let answer=[];
    
    let cost =0;
    let biggestCost = 0;
   for(let i=0;i<progresses.length;i++){
        let tempcount = 100-progresses[i];
       cost = Math.ceil(tempcount/speeds[i]);
        if(cost>biggestCost){
            biggestCost=cost;
            answer.push(1)
        }else{
            answer[answer.length-1]+=1;
        }
    }
    return answer;
}
console.log(solution([5,1,55],[1,30,5]))