var temp1 ="11\n\
1 4\n\
3 5\n\
0 6\n\
5 7\n\
3 8\n\
5 9\n\
6 10\n\
8 11\n\
8 12\n\
2 13\n\
12 14"

let temp2 = temp1.split('\n');
let input = [];
temp2.shift();
temp2.forEach((element)=>{
    input.push([parseInt(element.split(" ")[0]),
    parseInt(element.split(" ")[1])]
    );
});
// let input =[
//     [1,4],[3,5],[0,6],[5,7],[3,8],
//     [5,9],[6,10],[8,10],[8,12],[2,13],[12,14]]

let resultlist=[]
let tempMax= input.reduce((pre,cur)=>{
    return pre<cur[0]?cur[0]:pre
},0);
let max =0;
solution();
function solution(){
    input.forEach((element)=>{
       let tempCheck= JeaGi([],element);
       if(tempCheck!=undefined){
        max = tempCheck.length>max? tempCheck.length :max;
       }
     
    });
   let temp= resultlist.reduce((pre,cur)=>{
        return pre<cur.length?cur.length:pre;
   },0);
   console.log(temp);
}

function JeaGi(pre,now){
    pre.push(now);
    input.forEach((element)=>{
        if(!pre.includes(element)&& pre[pre.length-1][1]<=element[0]){
        JeaGi(pre,element)
        }
    })
    if(now[1]>=tempMax){
        resultlist.push(pre)
        return pre;
    }
}