
var resultArray=[];
// var tickets= [["ICN", "A"], ["ICN", "B"], ["B", "ICN"]]

var tickets=[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], 
["ATL", "ICN"], ["ATL","SFO"]]
solution();
function solution(){

   loop([],["ICN"]);
}
function loop(array,valuelist){
    
    let value= valuelist.pop();
    array.push(value);
    let tmplist=[]
    tickets.forEach(element=>{
        if(element[0]===value&&!array.includes(element[1]))
            tmplist.push(element[1]);
        if(element[1]==value&&array.includes(element[0]))
            tmplist.push(element[0]);
    })
    tmplist= [...new Set(tmplist)];
    tmplist=tmplist.sort((a,b)=>a>b?-1:1);
    valuelist=valuelist.concat(tmplist);

    
    loop(array,valuelist);
}