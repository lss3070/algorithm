// var input ="7\n\
// 6\n\
// 1 2\n\
// 2 3\n\
// 1 5\n\
// 5 2\n\
// 5 6\n\
// 4 7\n\
// ".split('\n');

var input ="5\n\
3\n\
1 2\n\
2 3\n\
3 4\n\
5 6\n\
7 8\n\
8 9\n\
9 1".split('\n');


input.shift();
input.shift();


// let input =[
// [1,2],
// [2,3],
// [1,5],
// [5,2],
// [5,6],
// [4,7]
// ]
let inputlist=[];

input.forEach((element)=>{
    let temp =[];
    let first = parseInt(element.split(" ")[0]);
    let second =parseInt(element.split(" ")[1]);

    if(first>second){
        let temp = first
        first= second;
        second = temp;
    }    
    temp.push(first);
    temp.push(second);
    inputlist.push(temp);
});


solution();
function solution(){
    let count =0;
    let hsMap = new Map();

    inputlist.forEach((element)=>{
        hsMap.set(element[0],element[0]);
        hsMap.set(element[1],element[1]);
    });
    inputlist.sort((a,b)=>{
        if(a[0]==b[0])
            return a[1]-b[1];
        else
            return a[0]-b[0];
    });

    inputlist.forEach((element)=>{
        
        if(hsMap.get(element[0])<hsMap.get(element[1])){

            let mNode = hsMap.get(element[0]);
            if(mNode<hsMap.get(element[1]))
                hsMap.set(element[1],mNode);
        }else{
            let mNode = hsMap.get(element[1]);
            hsMap.set(element[0],mNode);
        }
    })
   

    hsMap.forEach((v,k)=>{
        if(v===1&&k!==1) count++;
    });
    console.log(count);


    function bfs(big,small){
        
    }
}
