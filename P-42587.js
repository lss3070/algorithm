

solution([2, 1, 3, 2],3);

function solution(priorities, location) {

    let checkresult =false
    let result=0;
    
    let i=0;
    let sortArray=[]
    priorities.forEach(element => {
        sortArray.push([element,i]);
        i++
    });


   while(true){
    let max= sortArray.reduce(function(a,b){
        return a>b[0]?a:b[0];
    },0)
       if(sortArray[0][0]==max){
        result++
        if(sortArray.shift()[1]==location) break;
       }else{
        sortArray.push(sortArray.shift()); 
       }
   }
    console.log(result);
}