test();

function test(){
    
    let input =0;
    let check = true;

    let first = 0;
    let second =1;
    let index =1;
    while(check){
        if(input==0) {
            console.log(0);
            break;
        }
        if(index!=input){
            let temp = second;
            second = first+second;
            first = temp;
            index+=1;
        }else{
            console.log(second);
            break;
        }
    }
   
}
