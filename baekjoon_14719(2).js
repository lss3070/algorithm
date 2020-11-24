

let input = "4 4\n\
3 0 1 4".split("\n");

solution();

function solution(){
    input.shift();

    input = input.split(" ").map(e=>+e);
    let maxvalue = Math.max.apply(null,input);


    let left = input[0];
    let right = input[input.length-1];

    while(){
        
    }

}