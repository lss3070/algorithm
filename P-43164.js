



var resultArray=[];
var tickets=[["ICN", "COO"], ["ICN", "BOO"], ["COO", "ICN"], ["BOO", "DOO"]]

solution();
function solution(){
    resultArray.push("ICN");
    JaeGi(tickets,"ICN");
    console.log(resultArray);

    function JaeGi(array,nowState){
        let rowArray =[];
        array.reduce((pre,element,i)=>{
            if(element[0]===nowState){
                rowArray.push([element[1],i]);
            }
    
            if(i==array.length-1){
                if(rowArray.length>=0){
                    rowArray.sort((a,b)=>{
                        return a[0]>b[0]? 1:0;
                    });
                }
    
                if(tickets.length!==resultArray.length){
                    let bbong = rowArray.shift();
                    resultArray.push(bbong[0]);
                    let tempArray =array.slice();
                    tempArray.splice(bbong[1],1);
                    JaeGi(tempArray,bbong[0])
                }else if(array.length===1){
                    resultArray.push(element[1]);
                }
                else{
                    return;
                }
            }
            
            
        },[]);
    }
}

