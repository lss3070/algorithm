
let input ="5 5 5\n\
3 0\n\
3 1\n\
3 2\n\
2 2\n\
1 2".split("\n");

solution();

function solution(){
    input.shift();
    let count=0;

    let templist=new Array();
    let innerlist=new Array();
    input.forEach(element=>{
        if(element.split(" ").length==3&&innerlist.length!=0){
            templist.push(innerlist);
            innerlist=[]
        }else{
            innerlist.push(element);
        }
    });
    templist.push(innerlist);
    templist.forEach(lst=>{
        lst.forEach(element=>{
            count++
            bfs(lst,element);
        })
        console.log(count);
        count=0;
    })


    function bfs(list,value){
        list.splice(list.indexOf(value),1);
        let valuelst = value.split(" ").map(element=>parseInt(element));
        fir(list,value.split(" ").map(element=>parseInt(element)));
        sen(list,value.split(" ").map(element=>parseInt(element)));
        thi(list,value.split(" ").map(element=>parseInt(element)));
        fou(list,value.split(" ").map(element=>parseInt(element)));
    }

    function fir(list,copyvalue){
        copyvalue[0]-=1
        let tempvalue = copyvalue.join(" ");
        if(list.includes(tempvalue)){
            bfs(list,tempvalue);
        }
    }
    function sen(list,copyvalue){
        copyvalue[1]-=1
        tempvalue = copyvalue.join(" ");
        if(list.includes(tempvalue)){
            bfs(list,tempvalue);
        }
    }
    function thi(list,copyvalue){
        copyvalue[0]+=1
        tempvalue = copyvalue.join(" ");
        if(list.includes(tempvalue)){
            bfs(list,tempvalue);
        }
    }
    function fou(list,copyvalue){
        copyvalue[1]+=1
        tempvalue = copyvalue.join(" ");
        if(list.includes(tempvalue)){
            bfs(list,tempvalue);
        }
    }
}