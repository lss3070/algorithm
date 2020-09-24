const value ="05+060"
solution();
function solution(){

    let result=0;
    let valuelist = value.split(/([+-])/g);

for(let i=0;i<valuelist.length;i++){
    if(parseInt(valuelist[i])>=0){
        valuelist[i]=parseInt(valuelist[i]);
    }
}

    for(let i=0;i<valuelist.length;i++){
        if( valuelist[i]==="+"){
            valuelist[i+1]=valuelist[i+1]+")";
            valuelist[i-1]="("+valuelist[i-1];
        }
    }
    console.log(eval(valuelist.join('')));
}
