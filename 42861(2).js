
var costs =[[0,1,5],[1,2,3],[2,3,3],[3,1,2],[3,0,4],[2,4,6],[4,0,7]]

var n =5;
var results=[];
var count=0;
solution();

function solution(){
costs.sort((a,b)=>{
    return a[2] - b[2]
});

let hashMap =new Map();

costs.forEach((element)=>{
    hashMap.set(element[0],element[0]);
    hashMap.set(element[1],element[1]);
})

costs.forEach((costElement)=>{
    if(hashMap.get(costElement[0])!=hashMap.get(costElement[1])){
        let big;
        let small;
        if(hashMap.get(costElement[0])<hashMap.get(costElement[1])){
            big= costElement[1];
            small=costElement[0];
        }else{
            big=costElement[0];
            small= costElement[1];
        }
        let checkvalue= hashMap.get(big);
        
        hashMap.forEach((value,key)=>{
            checkvalue ==value? hashMap.set(key,hashMap.get(small)):""
           });

           hashMap.set(big,hashMap.get(small))

        count+=costElement[2]
    }
});
}