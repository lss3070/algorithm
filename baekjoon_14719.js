

let input = "3 5\n\
1 3 1 2 1".split("\n");

solution();

function solution(){

    let answer =0;
    input.shift();
    input=input[0].split(" ").map(e=>+e);
    
    let copyinput = [...input].sort((a,b)=>b-a);
    let secondvalue=501;

    let startvalue=[0,0];//index,value

    for(let i=0;i<input.length;i++){
        if(input[i]>=startvalue[1]){
            let gizun = startvalue[1];
            answer+=(gizun*(i-startvalue[0]-1));
            for(let j=startvalue[0]+1;j<i;j++){
                answer-=input[j];
            }
            startvalue=[i,input[i]];
            if(input[0]>input[input.length-1]){
                secondvalue= copyinput[copyinput.indexOf(input[i])+1]
            }
           
        }else if(i==input.length-1||input[i]==secondvalue){
            let gizun =input[i];
            answer+=(gizun*(i-startvalue[0]-1));
            for(let j=startvalue[0]+1;j<i;j++){
                answer-=input[j];
            }
            startvalue=[i,input[i]];
            secondvalue= copyinput[copyinput.indexOf(input[i])+1]
        }
    }
    console.log(answer);
}