
var begin ="hit";
var target="zzz";
var word=['zzz', 'zyz', 'xzz', 'xyz', 'hyt', 'hyz', 'xiz', 'hiz']
let resultArray=[];

solution();





function solution(){
    if(word.indexOf(target)>0){
        word.splice(word.indexOf(target),1);
        JaeGi(word,target,1);
    }else{
        ㅊ
        console.log(0);
    }

    if(result.length==0)
    console.log(resultArray);
}

function JaeGi(array,tag,n){
    array.reduce((pre,now)=>{
        if(Check(begin,tag)){
            resultArray.push(n);
            return;
        }
        if(Check(now,tag)){
            n++;
            let tempArray =array.slice();
            tempArray.splice(tempArray.indexOf(now),1);
            JaeGi(tempArray,now,n);
        }
    },[]);
}



function Check(pre,now){
    let preArray= pre.split("");
    let nowArray=now.split("");
    let check =0;

    for(let i=0;i<preArray.length;i++){
        if(preArray[i]==nowArray[i]){
            check++;
        }
    }
    if(check===preArray.length-1) return true;
    else return false;
}