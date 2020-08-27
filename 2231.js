test();

function test(){
    let realresult =0;
    let input ="7";

    let stringLength = 9 * input.length;

     let minNumber = Number(input)-stringLength;

     for (let index = minNumber; index < Number(input); index++) {
         let result = 0;
        let indexElement = index.toString().split("");
        indexElement.forEach(element=>{
            result +=Number(element);
        });
        if(index+result==Number(input)){
            console.log(index);
            break;
        }
     }
     
}