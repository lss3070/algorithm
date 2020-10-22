
let input ="100 50";

solution();

function solution(){
    let n = input.split(" ")[0];
    let m = input.split(" ")[1];
    
    if(n==1)
        console.log(1);
    else if(n==2)
        console.log(min(4,(m+1)/2));
    else if(m<7)
        console.log(min(4,m));
    else    
        console.log(m-7+5);
}

function min(a,b){
    return a<b?a:b;
}
//https://lipcoder.tistory.com/entry/%EB%B3%91%EB%93%A0-%EB%82%98%EC%9D%B4%ED%8A%B8-%EB%B0%B1%EC%A4%80-1783%EB%B2%88