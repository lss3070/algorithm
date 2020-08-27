
test(27)
let resultArray
function test(n){
    resultArray = Array.from(Array(n),()=>new Array(n));

    JaeGi(0,0,n)
}

function JaeGi(x,y,n){
    if(n==1){
        resultArray[x][y]="*";
    }
    let val = n/3;

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i==1&&j==1);
            else JaeGi()
        }
    }
}