
const genres= ["classic","pop", "classic", "classic", "pop"]
const plays =[500, 600, 150, 800, 2500]	




test();


function test(){
    let hashMap = new Map();

    for(let i=0;i <genres.length;i++){
        hashMap.set(genres[i], plays[i]);
    }
    console.log(hashMap);
}