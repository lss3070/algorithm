
let input ="2\n\
10\n\
15".split("\n");


solution();
function solution(){
    input.shift();
    input= input.map(a=>parseInt(a));
    let max =0;
    let result=[]
    //초기 shift해줘

    input.sort((a,b)=>b-a);

    input.forEach(element=>{
        result.push(element);
        let tempMax= element*result.length;
        if(tempMax>max){
            max= tempMax;
        }
    })
    console.log(max);
}