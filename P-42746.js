

let numbers = [3, 30, 34, 5, 9]
let result="";

test();

function test(){

    let i =0;
    while(true){
        if(numbers.length==0) break;

        i = Math.min.apply(null,numbers).toString().length;
        let tempvalue=numbers.reduce((a,b)=>{
            console.log(a.toString().substring(0,i)+","+b.toString().substring(0,i))
            return a.toString().substring(0,i)>b.toString().substring(0,i)? a:b;
        });
        numbers.splice(numbers.indexOf(tempvalue),1);
        result=result+tempvalue.toString();   
    }
    console.log(result);

}