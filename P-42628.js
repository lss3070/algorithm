

var operations=	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]

var result=[];
solution();
function solution(){

    operations.forEach((element)=>{
        let elementArray = element.split(" ");
        if(elementArray[0]=="I"){
            result.push(elementArray[1]);
        }else{
            if(elementArray[1]==1){
               let max= result.reduce((pre,cur,i)=>{
                    return pre[0]<cur? [cur,i]:pre 
                },[0,0]);
                result.splice(max[1],1);

            }else if(elementArray[1]==-1){
                let min= result.reduce((pre,cur,i)=>{
                    return parseInt(pre[0])>parseInt(cur)? [cur,i]:pre 
                },[999,0]);
                result.splice(min[1],1);
            }
        }
    });

    if(result==0) return [0,0];
    else return [Math.max.apply(null,result),Math.min.apply(null,result)];
}