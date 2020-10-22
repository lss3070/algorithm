
let inputlist = "GCF\n\
ACDEB".split("\n");

solution();


function solution(){

    let hsMap =new Map();
    let value =9;
    let answer=0;
    inputlist = inputlist.map((element)=>{
        let list=element.split("").reverse();
        return list.map((element,i)=>{
            return element+""+Math.pow(10,i);
        });
    }); 
   inputlist= inputlist.flat();
   inputlist.forEach(element=>{
        let alpa = element.substring(0,1);
        let value = element.substring(1);
        if(hsMap.get(alpa)==null)
            hsMap.set(alpa,value);
        else
            hsMap.set(alpa,parseInt(hsMap.get(alpa))+parseInt(value));        
   });
   inputlist= new Map([...hsMap.entries()].sort((a, b) => b[1] - a[1]));
   inputlist.forEach(element=>{
    answer+= element*value;
    value--;
   })
   console.log(answer);
}

//각배열에 해당하는 10을 곱해주고 그걸 토대로 순서대로 9~1곱해줌