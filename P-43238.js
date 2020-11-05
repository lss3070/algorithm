

solution(
    6,
    [7,10]
);

function solution(n,times){
    let answer =0;
    let done= 0;
    let left=0;
    let right=0;
    let mid=0;


    times.sort((a,b)=>a-b);
    right=times[times.length-1];
    right*=n;
    answer =right;

    while(left<=right){
        done=0;
        mid=(left+right)/2 ;
        times.forEach(element => {
            done+=(mid/element);
        });
        if(done<n)left=mid+1;
        else{
            if(mid<=answer){
                answer=mid;
            } 
            right = mid-1;
        }
    }
    console.log(Math.ceil(answer)+1);
}