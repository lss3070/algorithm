


solution(17);
function solution(n){

    let count =0;
    let pre =1;
    let now=1;
    let sum =0;

    while(true){
        if(n==1||n==2){
            console.log(1);
            break;
        }else{
            count++
            sum =pre+now;
            pre=now;
            now=sum;
            if(count==n-2) {
                console.log(sum);
                break;
            }
        }
    }
}

