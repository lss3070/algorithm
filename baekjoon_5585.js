

solution(380);

function solution(input){
    let count =0;
    input = 1000-input
    let coins =[500,100,50,10,5,1]

    coins.forEach(element=>{
        let coincount=Math.floor(input/element);
        if(coincount>=1){
            count+=coincount;
            input=  input-(element*coincount)
        }
    });
    console.log(count);
}