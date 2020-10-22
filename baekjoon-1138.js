let input ="4\n\
2 1 1 0".split("\n");

solution();

function solution(){
    let length= input.shift();
    input=input[0].split(" ");
    // let result=???;

    for(let i=0;i<length;i++){

        let left=input.shift();
        for(let j=0;j<length;j++){
            if(!left&&result[j]==0){
                result[j]=i+1;
                break;
            }else if(result[j]==0){
                left--;
            }
        }
    }
    console.log(result.join(" "));
}