
solution(100);


function solution(input){
    let button=[300, 60, 10];
    let result =[];

    button.forEach(element=>{
        let temp = Math.floor(input/element)
        if(temp>0){
            result.push(temp);
            input=input-(temp*element);
        }else{
            result.push(0);
        }
    });
    if(input>0)
        console.log(-1);
    else
        console.log(result.join(" "));
}