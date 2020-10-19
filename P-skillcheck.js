
var count=0;
solution(6);

//6 5 4 3 2 1

function solution(input){
   
    let dp=[];
    dp[1]=1;
    dp[2]=2;
    for(let i=3;i<=2000;i++){
        dp[i]=(dp[i-1]+dp[i-2])%1234567
    }
    console.log(dp[input]);
}
