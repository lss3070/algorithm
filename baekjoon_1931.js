var aa ="11\n\
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
12 14\n\
"


let input =[
    [1,4],[3,5],[0,6],[5,7],[3,8],
    [5,9],[6,10],[8,10],[8,12],[2,13],[12,14]]

let resultlist=[]
let tempMax= input.reduce((pre,cur)=>{
    return pre<cur[0]?cur[0]:pre
},0);
let max =0;
solution();
function solution(){
    let inputlist=[];

    let N= input.shift();
    for(let i=0;i<=N;i++){
        const [start,end] = input[i].split(' ');
        inputlist.push([+start,+end]);
    }
  
    
    inputlist.sort((a,b)=>{
                if(a[1]-b[1]===0){
            return a[0]-b[0];
        }else{
           return a[1]-b[1]
        }
    });
    let last=0;
     var tempee = inputlist.reduce((pre,cur)=>{
         if(cur[0]>=last){
             last = cur[1];
             return pre+1;
         }
         return pre
     },0)
console.log(tempee);
}