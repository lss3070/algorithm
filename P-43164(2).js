
var resultArray=[];
// var tickets= [["ICN", "A"], ["ICN", "B"], ["B", "ICN"]]

var tickets=[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], 
["ATL", "ICN"], ["ATL","SFO"]]
var tickets=[["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
solution();
function solution(){
    let answer =[];
    tickets=tickets.sort((a,b)=>{
        if(b[0]==a[0])
            return b[1]>a[1]?1:-1
        else return b[0]>a[0]?1:-1
    });
    let hashMap =new Map();

    tickets.forEach(element=>{
        if(hashMap.get(element[0])==null){
            hashMap.set(element[0],[element[1]]);
        }else{
            hashMap.set(element[0],hashMap.get(element[0]).concat(element[1]))
        }
    })    

    let pendinglist=["ICN"];
    while(pendinglist.length>0){
        let airport= pendinglist[pendinglist.length-1];
        console.log(hashMap.get(airport));

        if(hashMap.get(airport)==undefined){
            answer.push(airport);
            pendinglist.pop();
        }else if(hashMap.get(airport).length==0){
            answer.push(airport);
            pendinglist.pop();
        }else{
            pendinglist.push(hashMap.get(airport).pop());
        }
    }
    return answer.reverse();
}
//참고
https://velog.io/@jacob0122/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C