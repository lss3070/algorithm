
let people= [40,40,40];
var limit=100;
solution(people,limit);

function solution(people,limit){
    let i=0;
    let answer=0;
    people.sort();

    for(let j=people.length-1;i<=j;j--){
       if(people[j]+people[i]>limit){
            answer++;
        }else{
            answer++;
            i++;
        }
    }
    console.log(answer);
}
