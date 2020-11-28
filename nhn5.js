

solution([5,10,9,10,8])
function solution(votes){
    let target= votes.shift();
    if(votes.length==0) return 0;


    
   console.log(loop(votes,1));

    function loop(list,depth){
        let max = Math.max(...list);
        let maxIndex= list.indexOf(max);
        
        let count={};
        list.forEach(e=>count[e] = (count[e]||0) + 1);
        let m = count[max]>1? max:max-1;//max 최대값이 여러개 있는경우 체크

        if(target+depth>m){
            return depth
        }else{
            list[maxIndex]=max-1;
           return loop(list,depth+1)
        }
    }
}

