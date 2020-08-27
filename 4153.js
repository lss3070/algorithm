test();

function test(){
    let inputlist = new Array();

    inputlist.push("6 8 10");
    inputlist.push("25 52 60");
    inputlist.push("5 12 13");
    inputlist.push("0 0 0");

    inputlist.forEach(element =>{
        if(element!= inputlist[inputlist.length-1]){
            let elementlist = element.split(" ");
            elementlist = elementlist.sort(function(a,b){
                return a-b;
            });
    
            let result =(Number(elementlist[0])*Number(elementlist[0]))+(Number(elementlist[1])*Number(elementlist[1]))==
            Number(elementlist[2])*Number(elementlist[2])?"right":"wrong";
    
            console.log(result);
        }

    });
}