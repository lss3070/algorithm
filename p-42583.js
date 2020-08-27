let bridge_length=100;
let weight=100;
let truck_weights=[10];

let outcount=0;

let checkweight=0;
let count =0;
let i=0;


solution();
function solution() {

    ing_truck = [];

    while(true){
       
        ing_truck.push([truck_weights[i],0])

       checkweight= ing_truck.reduce(function(a,b){
            return a+b[0]
        },0);
        if(checkweight>weight){
            ing_truck.splice(-1,1);
        }else i++;
        ing_truck.forEach(element => {
            element[1]+=1;
        });
        
        ing_truck=ing_truck.filter(function(element){
            if(element[1]!=bridge_length){
                return element[1]!=bridge_length
            }else{
                outcount++;
            }
        })
    //    ing_truck= ing_truck.filter(element=> element[1]!=bridge_length);
        
        count++;
        if(outcount==truck_weights.length)break;
    } 

}