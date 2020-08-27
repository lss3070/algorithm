let input =27;   
let startMap = new Array(input);
for (let index = 0; index < startMap.length; index++) {
    startMap[index]= new Array(input);
}
startMap.forEach(element=>{
    element = new Array(input);
})
test();


function test(){
    
    for (let i = 0; i < input; i++) {
        startMap[i].fill(' ',1);
    }

    solve(0,0,input);
    for (let i = 0; i < input; i++) {
        let aa = startMap[i].toString()
       console.log(aa.replace(/,/gi,''));
    }
}

function solve(x,y,n){
    if(n==1){
        startMap[x][y]='*';
        return;
    }
    let m =n/3;
    for(let i =0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i==1&&j==1){
                continue;
            }
            solve(x+m*i,y+m*j,m);
        }
    }
}
