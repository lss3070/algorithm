
solution(21378)
function solution(cardNumber){
    let answer=0;
    cardNumber=cardNumber.toString().split("").map(e=>+e);
    let length=cardNumber.length

    if(length%2==0){
        cardNumber= cardNumber.map((e,i)=>{
            if((i+1)%2!=0)
                return (e*2).toString().split("").map(e=>+e)
            else return e.toString().split("").map(e=>+e);
        })
    }else{
        cardNumber= cardNumber.map((e,i)=>{
            if((i+1)%2==0)
                return (e*2).toString().split("").map(e=>+e)
            else return e.toString().split("").map(e=>+e);
        })
    }

    cardNumber= cardNumber.reduce((pre,cur)=>{
        return pre.concat(cur)
    },[]).forEach(element => {
        answer+=element
    });
    return answer%10==0?"VALID":"INVALID";
}