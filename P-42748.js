

let array =[1, 5, 2, 6, 3, 7, 4];
let commands=[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	

let result=[];
test();

function test(){

    commands.forEach((element)=>{
        let temp =array.slice(element[0]-1,element[1])
        temp.((a,b)=>{return a-b});
       console.log(temp[element[2]-1]);
    });
}