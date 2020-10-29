


let input="2\n\
RG\n\
BR".split("\n");
let length= input.shift();


solution();
function solution(){
    let count=0;
   
    input= input.map(element=>{
        let tmp= element.split("");
        tmp= tmp.map(element => {
            return [element,0]
        });
       return tmp;
    });

    
    let temp= JSON.parse(JSON.stringify(input));

    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            if(input[i][j][1]==0){
                count++;
                loop(i,j,input[i][j][0],count);
            }
        }
    }

    let fcount= JSON.parse(JSON.stringify(count));
    input =temp;
    
    count=0;
    
    input.forEach(element => {
        element.forEach(element=>{
            if(element[0]=="G")element[0]="R"
        })
    });

    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            if(input[i][j][1]==0){
                count++;
                loop(i,j,input[i][j][0],count);
            }
        }
    }
    
    console.log(fcount+" "+count);
}

function loop(x,y,key,value){   
    input[x][y][1]=value;
    if(x+1<length){
        if(input[x+1][y][0]==key&&input[x+1][y][1]==0){
            loop(x+1,y,key,value);
        }
    }

    if(y+1<length){
        if(input[x][y+1][0]==key&&input[x][y+1][1]==0){
            loop(x,y+1,key,value);
        }
    }

    if(y-1>=0){
        if(input[x][y-1][0]==key&&input[x][y-1][1]==0){
            loop(x,y-1,key,value);
        }
    }
    if(x-1>=0){
        if(input[x-1][y][0]==key&&input[x-1][y][1]==0){
            loop(x-1,y,key,value);
        }
    }
}