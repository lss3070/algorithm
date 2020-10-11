let input = "7\n\
0110100\n\
0110101\n\
1110101\n\
0000111\n\
0100000\n\
0111110\n\
0111000".split("\n");

solution();
function solution(){
    let max = input.shift();
    var dangi =0;
    let hsMap = new Map();
    let inputlist=[];

    input.forEach((element)=>{
        inputlist.push(element.split(""));
    });

    for(let i =0;i<inputlist.length;i++){
        for(let j= 0;j<inputlist[i].length;j++){
            if(inputlist[i][j]==="1"){
                hsMap.get(i+" "+j)==undefined?dangi++:"";
                    JeaGi(i,j);
            }
        }
    }
    console.log(hsMap);


    function JeaGi(i,j){
        try{
            if(hsMap.get(i+" "+j)==dangi||hsMap.get(i+" "+j)==undefined){
                hsMap.set(i+" "+j,dangi);
                if(j+1<max&&inputlist[i][j+1]==="1"){
                    if(hsMap.get(i+" "+j+1)==null)
                    JeaGi(i,j+1);
                }
                    
                
                if(i+1<max&&inputlist[i+1][j]==="1"){
                    if(hsMap.get(i+1+" "+j)==null)
                    JeaGi(i+1,j);
                }
                    

                if(i-1>0&&inputlist[i-1][j]==="1"){
                    if(hsMap.get(i-1+" "+j)==null)
                    JeaGi(i-1,j);
                }
                    

                if(j-1>0&&inputlist[i][j-1]==="1"){
                    if(hsMap.get(i+" "+j-1)==null){
                        JeaGi(i,j-1);
                    }
                }  
            }
        }catch(e){
            console.log(i ,j);
            console.log(e);
            
        }

    }
}