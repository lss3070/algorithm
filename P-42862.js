
let n=3;
let lost=[1,2]
let reserve=[2,3];
solution();

function solution(){
    let origin=[]
    for(let i=1;i<=n;i++) origin.push(i);

    lost.forEach(element=>{
      
       if(reserve.includes(element))
        reserve.splice(reserve.indexOf(element),1);
       else origin.splice(origin.indexOf(element),1);
        
    })


    for(let i=0;i< reserve.length;i++){
        let check=true;
        if(!origin.includes(reserve[i]+1)&&!(reserve[i]+1>=n)&&check){}
            origin.push(reserve[i]+1)
        if(!origin.includes(reserve[i]-1)&&!(reserve[i]-1==0))
            origin.push(reserve[i]-1);
    }
    console.log(origin.length);
}