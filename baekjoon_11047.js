const coin = 10;
var min = 4790;
const list = [1,5,10,50,100,500,1000,5000,10000,50000]


solution();

function solution(){

  list.sort((a,b)=>{
      return b-a;
  });
    let result=0;
    let i =0;
    while(min>0||i<list.length){
        let value = Math.floor(min/list[i]);
        if(value>=1){
            result+=value;
            min-=(value*list[i]);
        }
        i++
    }

  console.log(result);
}