

let participant= ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion= ["josipa", "filipa", "marina", "nikola"];	

solution();


function solution(){

    completion.forEach(element=>{
       let index = participant.indexOf(element);
        participant.splice(index,1);
    });
    console.log(participant.join(""));
}