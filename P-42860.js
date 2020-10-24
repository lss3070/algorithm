

let name="BBBAAAB";
solution();

function solution(){
    //65~90

    let answer=0;
    let namelist= name.split("");

    let min =namelist.length-1;

    for(let i=0;i<=namelist.length;i++){
        if(namelist[i]!='A'){
            let next=i+1;
            while(next<namelist.length&&namelist[next]=='A'){
                next++
            }
            let move =(2*i)+namelist.length-next;
            min = move>min?min:move;
        }
    }

    namelist.forEach(element => {
        if(element.charCodeAt()>=79){
            answer+=(91-element.charCodeAt());
        }else{
            answer+=(element.charCodeAt()-65);
        }
    });

    console.log(answer+min);
    
}