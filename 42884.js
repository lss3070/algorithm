
const route = [[-20,15], [-14,-5], [-18,-13], [-5,-3]]
solution(route)


function solution(routes){
    let answer =1;
    routes.sort((a,b)=>{
        return a[0]-b[0];
    })
let standard= routes[0][1];

for(let i =0; i<routes.length-1;i++){
    if (standard > routes[i][1]) standard = routes[i][1];
     if (standard < routes[i + 1][0]) {
          answer++; 
          standard = routes[i + 1][1]; 
        }
    }
}