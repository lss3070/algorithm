
var costs= [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]];

var resultlist=[100,100];
var n =4;
var hashMap;

solution();

function solution(){

    let points=[]
    hashMap = new Map();

    
    costs.forEach((element)=>{
        if(hashMap.get(element[0])==undefined){
            hashMap.set(element[0],[element[1]]);
        }else{
            let templist=hashMap.get(element[0]);
            hashMap.set(element[0],[element[1], ...templist]);
        }
        if(hashMap.get(element[1])==undefined){
            hashMap.set(element[1],[element[0]]);
        }else{
            let templist=hashMap.get(element[1]);
            hashMap.set(element[1],[element[0],...templist]);
        }
        
       points.push(element[0]);
       points.push(element[1]);
    });

    points = Array.from(new Set(points));

    points.forEach((element)=>{
        JeaGi(element,element,[],0);
    })
    console.log(resultlist);
}

function JeaGi(standardNum,nowNum,passbyList,value){

    let goingList= hashMap.get(nowNum);


    for(let i=0;i<goingList.length;i++){
        if(passbyList.indexOf(goingList[i])<0){

            let preNum = passbyList[passbyList.length-1];
            

            costs.forEach((element)=>{
                if((element[0]==preNum||element[0]==nowNum)&&
                (element[1]==nowNum||element[1]==preNum)){
                    value+=element[2];
                }
            });
            passbyList.push(goingList[i]);
            nowNum=goingList[i];
            i=goingList.length;
        }
    }
    //여기서 passbyList체크를 한다.


    if(passbyList.length==n-1){
        if(resultlist[0]>value){
            resultlist[0]=value;
            resultlist[1]=passbyList;
        }
    }else{
        return JeaGi(standardNum,nowNum,passbyList,value);
    }
    
}

//["연결되는 다리번호1","연결되는 다리번호2","다리를 건설할 때 드는 비용"]


//문제 풀이 
//먼저 포인트 점들을 먼저 다 구한다
//포인트 점들 순서대로 재귀함수로 돌린다.
