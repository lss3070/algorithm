
let operations=["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]
solution(operations);

function solution(input){

    let answer =[];

    input.forEach(element => {
       element = element.split(" ");

       switch( element[0]){
           case "I":
               answer.push(parseInt(element[1]));
               break;
            case "D":
                let remove;
                if(element[1]==1)
                   remove= Math.max.apply(null,answer)
                else
                    remove= Math.min.apply(null,answer);

                    answer.splice(answer.indexOf(remove),1); 
                break;
       }
      
    });
    if(answer.length==0)answer.push(0)
    console.log([Math.max.apply(null,answer),
    Math.min.apply(null,answer)]);
}