test();


function test(){
    let input = new Array();
    input.push(6);
    input.push(2);
    input.push(10);
    input.push(3);

    let x = input[0];
    let y = input[1];
    let w = input[2];
    let h = input[3];

    let counter =[x,y,w-x,h-y];

    console.log(Math.min.apply(null,counter));
}