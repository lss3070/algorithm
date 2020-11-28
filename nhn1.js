
solution([5,31,15])

function solution(goods){
    
    let lower =  []
     let answer=0;

    goods.forEach(element => {
        if(element>=50){
            answer+=(element-10);
        }else{
            lower.push(element);
        }
    });

    
    let lowerresult= lower.reduce((pre,cur)=>{
        return pre+cur
    },0)
    if(lowerresult>=50) answer+=(lowerresult-10)
    else answer +=lowerresult
    
    return answer
}