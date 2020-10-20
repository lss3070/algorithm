

let name="JEROEN";
solution();

function solution(){
    //65~90
    let cursor=65;
    let namelist= name.split("");

    namelist.forEach(element=>{
        let custart= Math.abs(cursor-element.charCodeAt());
        let astart = Math.abs(element.charCodeAt()-cursor)+1;

    });
}