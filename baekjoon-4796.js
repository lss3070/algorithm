//연속하는 8일중 5일동안 사용가능, 강산이는 이제 막 20일짜리 휴가를 시작

let input="5 8 20\n\
5 8 17\n\
5 8 15\n\
10 100 100000\n\
123 456 789\n\
0 0 0".split("\n");
solution();

function solution(){
    input.forEach((element,i) => {
        
        if(i!=input.length-1){
            let innerlist = element.split(" ");
            let L= parseInt(element.split(" ")[0]);
            let P=parseInt(element.split(" ")[1]);
            let V=parseInt(element.split(" ")[2]);

            let option= Math.floor(V%P)<L?Math.floor(V%P):L;
            let result =Math.floor(V/P)*L+option;
  
           
              console.log("Case "+(i+1)+": "+ result);
        }
    });

}