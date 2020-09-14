const genres=["classic", "pop", "classic", "classic", "pop"]
const plays = [500, 600, 150, 800, 2500]
let result=[];
var hashtable;

test();

function test(){
    let count=0;
    let hashtable = SetHashTable();
    hashtable.forEach((value,key)=>{
        value= value.sort((a,b)=>{
           if(a[0]>=b[0]){
            if(a[1]==b[1]){
                return a[1]-b[1]
            }else{
                return -1;
            }
           }else{
               return 1;
           }
        });
    });

    hashtable = new Map([...hashtable].sort((a,b)=>{
        let aMax=0;
        let bMax=0;
        a[1].forEach((element)=>{
            aMax=+element[0]
        });
        b[1].forEach((element)=>{
            bMax=+element[0]
        });
        return aMax>bMax? -1:1
    }))
    
    console.log(hashtable);
    hashtable.array.forEach(element => {
    });
}

function SetHashTable(){
    let hashmap= new Map();
    for(let i=0; i<genres.length;i++){
        let value =hashmap.get(genres[i])
        if(value!=null){
           hashmap.set(genres[i],[[plays[i],i], ...value])
        }else{
            
            hashmap.set(genres[i],[[plays[i],i]]);
        }
    }
    return hashmap;
}