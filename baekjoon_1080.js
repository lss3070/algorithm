

let input="3 4\n\
0000\n\
0010\n\
0000\n\
1001\n\
1011\n\
1001".split("\n");

solution();

function solution(){

    let row = parseInt(input.shift().split(" ")[0]);
    let values=[];
    let inner=[];
    for(let i=0;i<input.length;i++){
        if(i/row==1){
            values.push(inner);
            inner=[];
            inner.push(input[i]);
        }else if(i==input.length-1){
            inner.push(input[i]);
            values.push(inner);
        }else{
            inner.push(input[i]);
        }
    }

   values = values.map(e=>{
       return e.map(ee=>{
            return ee.split("").map(eee=>parseInt(eee));
        })
    })

    for(let i=0;i)
}