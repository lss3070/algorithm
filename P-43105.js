

let input=[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
solution();

function solution(){
    

    
    let length=input.length
    let valuelist= Array.from(Array(length),()=>Array());
    valuelist[0][0]=input[0][0];
    

    for(let i=1;i<length;i++){
        for(let j=0;j<=i;j++){
            if(j==0){
                valuelist[i][j]=valuelist[i-1][j]+input[i][j]
            }else if(j==i){
                valuelist[i][j]=valuelist[i-1][j-1]+input[i][j]
            }else{
                valuelist[i][j] = custommax(valuelist[i-1][j-1],valuelist[i-1][j])+ input[i][j];
            }
        }
    }
    console.log(Math.max.apply(null,[].concat(...valuelist)));
}
function custommax(a,b){
    return a>b?a:b;
}



//01234
//0->0


//0->0
//1->0,1
//2->1,2
//3->2

//1->0,1
//2->1,2
//3->2,3
//4->3

