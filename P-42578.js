

let clothes= [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], 
["green_turban", "headgear"]]

var hashMap = function(){  
    this.map = new Map();
}; 
hashMap.prototype={
    put : function(key){  
        if(this.map[key]==undefined){
            this.map[key] =1;
        }else{
            this.map[key] +=1;
        }
    },
    get:function(){
        let array = new Array();
        this.map.forEach((element)=>{
            array.push(value);
            array.push(key);
        });
        return array;
    }
} 
test()

function test(){
    let map = new hashMap();
    clothes.forEach((element)=>{
            map.put(element[1]);
        });
        console.log(map.get());
}