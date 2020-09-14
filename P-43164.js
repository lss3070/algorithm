

<<<<<<< HEAD
var tickets=[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]

solution(tickets);
function solution(){
    let resultArray =[];
    dfs(tickets,"ICN");

}

function dfs(dfsarray,target){
    let usearray=[];

    //target이 맞는 경로 뽑아냄
    dfsarray.forEach((element,i)=>{
        if(element[0]==target){
            usearray.push(element);
        }
    });
    //target 재배열
    if(usearray.length>1){
        usearray.sort((a,b)=>{
            return a[1].toString()>b[1].toString()? 1:0;
         });
    }
    //기존 남아있는 배열에서 경로 맞는애들 제외시키기
    console.log(usearray);

    //재귀
    usearray.forEach((useelement)=>{
        let temparray = dfsarray.splice();
        temparray.forEach((tempelement,i)=>{
            if(tempelement==useelement){
                temparray.splice(i,1);
                dfs(dfsarray,useelement[1]);
            }
        });
    });


=======


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
>>>>>>> 09d3870a9116850a99a4e2fb6fe5014d54d6a403
}

