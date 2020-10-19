
let n=5;
let lost=[2,4]
let reserve=[1,3,5];
solution();

function solution(){
    let origin=[]
    for(let i=1;i<=n;i++){
        origin.push(i);
    }
    lost.forEach(element=>{
       origin.splice(origin.indexOf(element),1);
    })

    for(let i=0;i< reserve.length;i++){

        if(!origin.includes(reserve[i]+1)&&!(reserve[i]+1>=n))
            origin.push(reserve[i]+1)
        else if(!origin.includes(reserve[i]-1)&&!(reserve[i]-1==0))
            origin.push(reserve[i]-1);
    }
    console.log(origin.length);
}