let list=[3,1,4,3,2]

solution();
function solution(){
    let result=0;
    let stayTime=0;

    let answer
    list.sort((a,b)=>{
        return a-b;
    })
    list.forEach((element)=>{
        stayTime+=element;
        result+=stayTime;
    })
    console.log(result);


    
}