

var operations=	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]

var result=[];
var check=0;
let index=0;
solution();
function solution(){

    operations.forEach((element)=>{
        let elementArray = element.split(" ");

        if(elementArray[0]=="I")result.push(elementArray[1]);
        else{
            if(elementArray[1]==1){
                result.reduce((pre,cur,i)=>{
                    if(pre<cur){
                        index=i;
                        return cur
                    }else return pre
                },0);
            }else if(elementArray[1]==-1){
                result.reduce((pre,cur,i)=>{
                    if(pre>parserInt(cur)){
                        index=i;
                        return cur
                    }
                },999);
            }
            result.splice(index,1);
        }
    });

    if(result==0) return [0,0];
    else{
        console.log([Math.max.apply(null,result),
            Math.min.apply(null,result)]);

        return [Math.max.apply(null,result),
            Math.min.apply(null,result)];
    } 
   
}