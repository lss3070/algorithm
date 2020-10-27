// let input ="6 5\n\
// 1 2\n\
// 2 5\n\
// 5 1\n\
// 3 4\n\
// 4 6".split("\n");

let input="6 5\n\
1 2\n\
2 5\n\
5 1\n\
3 4\n\
4 6".split("\n");

solution();
function solution(){
    let result=[];
    input.sort((a,b)=>{
        if(a[0]==b[0])
            return a[1]-b[1];
        else return a[0]-b[0];
    });
    let hsMap=new Map();
    input.forEach(element => {
        hsMap.set(parseInt(element.split(" ")[0]),parseInt(element.split(" ")[0]));
        hsMap.set(parseInt(element.split(" ")[1]),parseInt(element.split(" ")[1]));
    });

    input.forEach(element=>{
       let inner = element.split(" ");
       let big= Math.max.apply(null,inner);
       let small= Math.min.apply(null,inner);
       if(hsMap.get(big)>hsMap.get(small))
            hsMap.set(big,hsMap.get(small));
        else hsMap.set(small,hsMap.get(big))
    })
    hsMap.forEach((v,k)=>{
        result.push(v);
    })
    result=new Set(result);
    console.log(result.size);
}

