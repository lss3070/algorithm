// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

// test();

// function test(){
//     let inputlist = input[1].toString().split(' ');

//    let min= Math.min.apply(null,inputlist);
//    let max = Math.max.apply(null,inputlist);
    
//     console.log(min +' '+max);
// }

test();
function test(){
    
    let inputlist = new Array();
    inputlist.push("6 12 10");
    inputlist.push("30 50 72");
    inputlist.push("1 99 21");
    inputlist.push("2 11 11");

    inputlist.forEach(elementlist => {
    
    let h =elementlist.split(" ")[0];
    let w = elementlist.split(" ")[1];
    let n = elementlist.split(" ")[2];

    let floor  = n%h==0? 1:n%h;
    let number = n/h;

    if(isNaN(number) == false && Number.isInteger(number)==false)
    {
        number = Math.ceil(number)>10?Math.ceil(number):"0"+Math.ceil(number).toString();
    }
    let result = floor.toString()+number;
    console.log(result);
    });
}

//1, 2,8, 20,38, 62




//1,6,12,25,32
