

let citations=[1545, 2, 999, 790, 540, 10, 22];
test();

function test(){
    let result=999;
let resultmax=0;
citations.sort((a, b) => a - b); 
    console.log(citations);
    for(let i=1;i<=citations.length;i++){
        let tempcount=0;
        
       let max= citations.filter((a)=>{
            return i<=a
        }).length;
        let min=citations.filter((a)=>{
            return i>=a
        }).length;
        if(max-min<result&&max-min>=0){
            result=max-min;
            resultmax=i;
        }
        console.log(i+","+max+","+min)
    }
    console.log(resultmax);
}
