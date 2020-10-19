
let inputs ="5\n\
3 2\n\
1 4\n\
4 1\n\
2 3\n\
5 5\n\
7\n\
3 6\n\
7 3\n\
4 2\n\
1 4\n\
5 7\n\
2 5\n\
6 1".split("\n");

solution(inputs);

function solution(input){
    let innerinput= []
    let innertemp=[];

    input.forEach((element,i) => {
       let temp = element.split(" ");
       if(temp.length>1){
            innertemp.push(temp);
            if(input.length-1==i){
                innerinput.push(innertemp);
            }
       }else if(temp.length==1&&i!=0){
           innerinput.push(innertemp);
        innertemp=[];
       }
    });

    innerinput.forEach(inner=>{
        inner.forEach(element=>{
            element
        });
    })

    console.log(innerinput);

}