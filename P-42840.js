
let answers=[1,2,3,4,5]

test();
function test(){
    let result =[]
    let tempcount=0;
    let templist=[
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
]

let resultArray=[]
for(let i=0;i<templist.length;i++){
    let tempcount=0;
    for(let j=0;j<answers.length;j++){
        if(answers[j]==templist[i][j]) tempcount+=1
        
        if(j==answers.length-1) resultArray.push([i,tempcount]);
    }
}
let max = resultArray.reduce(function(preVal,curVal){
    return preVal>curVal[1]?preVal:curVal[1]
},0)
resultArray.forEach((element)=>{
    if(element[1]==max) result.push(element[0]+1);
});

 console.log(result)

}