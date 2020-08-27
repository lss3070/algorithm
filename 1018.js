test();

function test(){
    inputlist = new Array();
    inputlist.push("8 8");
    inputlist.push("WBWBWBWB");
    inputlist.push("BWBWBWBW");
    inputlist.push("WBWBWBWB");
    inputlist.push("BWBBBWBW");
    inputlist.push("WBWBWBWB");
    inputlist.push("BWBWBWBW");
    inputlist.push("WBWBWBWB");
    inputlist.push("BWBWBWBW");

    let rowlength = parseInt(inputlist[0].split(" ")[0]);
    let columnlength= parseInt(inputlist[0].split(" ")[1]);
    let checkcount=0;


    let chessbox=new Array();
    let resultbox= new Array();

    for (let i = 1; i < rowlength+1; i++) {
        chessbox.push([]);
       for (let j = 0; j < columnlength; j++) {
           chessbox[i-1][j]=inputlist[i].substr(j,1);
       }
    }

for (let i = 0; i < rowlength; i++) {
    resultbox.push([]);
    for (let j = 0; j < columnlength; j++) {
        if(resultbox[i].length==0){
            resultbox.push(chessbox[i][j])
        }else{
            if(chessbox[i][j]==resultbox[i][j-1]){
                checkcount+=1;
                resultbox[i][j]=="B"?"W":"B";
            }else{
                resultbox[i][j]==chessbox[i][j];
            }
        }
    }
}
console.log(resultbox);
console.log(chessbox);
}