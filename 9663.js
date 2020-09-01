var size;
var count=0;

solution(8)

function solution(n){
    size=n;
    test([],1,1)
}


function test(preArray,row,col){

    if(preArray.length===0){
        preArray.push([1,1]);
        test(preArray,row+1,col);
    }else{
        for(let i=row;i<size;i++){
            for(let j=col;j<size;j++){
              let tempArray =  preArray.forEach((pre,element) => {
                    if(element[0]!=i||element[1]!=j){
                      if(Math.abs(element[0]-element[j])==Math.abs(element[i]-element[j])){
                            pre.push(element);
                      }
                    }
                },[]);
                if(preArray.length==tempArray.length){
                    count++;
                    preArray.push([i,j]);
                    test(preArray);
                }
            }
        }
    }

    

}