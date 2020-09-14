

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


}

