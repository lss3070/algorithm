const genres=["classic", "pop", "classic", "classic", "pop","jpop"]
const plays = [500, 600, 150, 800, 2500, 3000]
let answer=[];

solution(genres,plays);
function solution(genres, plays) {
    var answer = [];
    let hashtable = new Map();
    
      for(let i=0; i<genres.length;i++){
        let value =hashtable.get(genres[i])
        if(value!=null) hashtable.set(genres[i],[[plays[i],i], ...value])
        else hashtable.set(genres[i],[[plays[i],i]]);
    }
    
    hashtable.forEach((value,key)=>{
        value= value.sort((a,b)=>{
           if(a[0]>=b[0]) return a[0]==b[0]? a[1]-b[1]:-1
           else return 1;
        });
    });

    hashtable = new Map([...hashtable].sort((a,b)=>{
        let aMax= a[1].reduce((pre,cur)=>{return pre+cur[0]},0);
        let bMax= b[1].reduce((pre,cur)=>{return pre+cur[0]},0);
        return aMax>bMax? -1:1
    }))
    
    hashtable.forEach((value,key)=>{
        if(value.length>1) answer.push(value[0][1],value[1][1]);
        else if(value.length==1) answer.push(value[0][1]);
    })
    console.log(answer);
    return answer;
}
