let input = "7\n\
3 1 6 2 7 30 1".split("\n");

solution();

function solution(){

    input.shift();
    input= input[0].split(" ").map(ele=>parseInt(ele)).sort((a,b)=>a-b);
    let sum= 0;


    for(let i=0;i<input.length;i++){
        if(sum+1<input[i]){
            break;
        }
        sum+=input[i];
    }
    console.log(sum+1);

}
