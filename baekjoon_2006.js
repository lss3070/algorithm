
let input =[
    [1,2],
    [2,3],
    [1,5],
    [5,2],
    [5,6],
    [4,7]
]

solution();


function solution(){

    let hashMap = new Map();
input= input.sort((a,b)=>{
    if(a[0]==b[0]){
        return a[1]-b[1];
    }else return a[0]-b[0];
});

input.forEach((element)=>{
    let small;
    if(element[0]<element[1])
    small= element[0]
    else
    small = element[1]

    if(hashMap(small)){
        
    }

})
}