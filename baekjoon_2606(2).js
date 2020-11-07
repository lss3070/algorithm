
var input="7\n\
6\n\
1 2\n\
2 3\n\
1 5\n\
5 2\n\
5 6\n\
4 7\n\
".split("\n")

solution();
function solution(){
    input.shift();
    input.shift();

    input= input.map(element=>{
        return [parseInt(element.split(" ")[0]),parseInt(element.split(" ")[1])];
    })

    input.sort((a,b)=>{
        if(a[0]==b[0])
            return a[1]-b[1];
        else
            return a[0]-b[0];
    });

    
    console.log(dfs([],[1]));
    
}

function dfs(array,valuelist){
    valuelist = Array.from(new Set(valuelist));  
    let value= valuelist.shift();
    array.push(value);
    let valuechild=[]

    input.forEach(element => {
        if(element[0]==value&&!array.includes(element[1]))
            valuechild.push(element[1]);

        if(element[1]==value&&!array.includes(element[0]))
            valuechild.push(element[0]);
    });
    valuechild.sort((a,b)=>a-b);

    if(valuechild.length==0) valuechild=valuelist
    else valuechild = valuechild.concat(valuelist);

    if(valuechild.length==0) return array.length-1;
    else return dfs(array,valuechild);
}