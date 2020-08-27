

let participant= ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion= ["josipa", "filipa", "marina", "nikola"];	

test();


function test(){
    i=0;
    while(true){
        let temp = completion.shift();  
        participant.splice(participant.indexOf(temp),1);
        if(completion.length==0) break;
    }
    console.log(participant[0]);
}