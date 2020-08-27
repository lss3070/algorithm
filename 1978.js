
test();

function test(){
    let count =0;
    let inputlist= new Array();
    inputlist.push("4");
    inputlist.push("1 3 5 7 10 7 7 4 1");

    inputlist[1].split(" ").forEach(element =>{
        element= Number(element);
        count+=numCheck(element)?1:0;
    });
    console.log(count);
}
function numCheck(element){
    if(element<2) return false;

    for(let i =2;i * i<=Number;i++){
        if(element%i==0) return false;
    }
    return true;
}