
solution(5457,[6,7,8])
function solution(page,broken){
    
    let nums=new Array(page).fill(false);
    
    broken.forEach(e=>{
        nums[e]=true;
    })

    let answer =page-100;
    if(answer<0)answer=-answer;
    for(let i=0;i<=1000000;i++){
        let count =i;
        let length =move(count);
        if(length>0){
            let press = count-page;
            if(press<0)press=Math.abs(press);
            if(answer>length+press){
                answer=length+press;
            }
        }
    }

    console.log(answer);

    function move(c){
        let length =0;
        if(c==0){
            return nums[0]?0:1;
        }

        while(Math.floor(c)>0){
            if(nums[Math.floor(c)%10]){
                return 0;
            }
            length+=1;
            c /= 10
        }
        return length;
    }
}


