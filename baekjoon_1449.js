
let input="5 2\n\
4 5 6 7 8".split("\n");



solution();


function solution(){
    let fline=input.shift();
    let N=parseInt(fline.split(" ")[0]);
    let L=parseInt(fline.split(" ")[1]);

    let pipelist=input[0].split(" ").map(x=>parseInt(x));

    let count=1;

    pipelist.sort((a,b)=>{
       return parseInt(a)-parseInt(b)
    });

    let min=pipelist[0];
    for(let i=0;i<=N;i++){
        if(pipelist[i]-min>L-1){
            min=pipelist[i];
            count++;
        }
    }
    console.log(count);
}