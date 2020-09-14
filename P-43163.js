
// var begin ="hit";
// var target="zzz";
// var word=['zzz', 'zyz', 'xzz', 'xyz', 'hyt', 'hyz', 'xiz', 'hiz']

var begin ="hit";
var target="cog";
var word=['hot', 'dot', 'dog', 'lot', 'log', 'cog']


// var begin ="hhk";
// var target="ziz";
// var word=['hht', 'hih','zih', 'ziz']
let resultArray=[];

solution();

function solution(){
    if(word.indexOf(target)>=0){
        // word.splice(word.indexOf(target),1);
        JaeGi(word,begin,0);
    }else{
        console.log(0);
    }

    if(resultArray.length==0)
    console.log(resultArray);
}

function JaeGi(array,value,n){
    array.forEach((element)=>{
        if(value===target){
            resultArray.push(n-1);
            return;
        }else if(Check(element,value)){
            n++
            let tempArray =array.slice();
            tempArray.splice(tempArray.indexOf(element),1);
            JaeGi(tempArray,element,n);
        }
    })

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