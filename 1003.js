



let zerocount=0;
let onecount=0;

test(3);


function solution(){
    test()
}

function test(n){
    let current=1;
    let last=0;
    let result =1;
    for(let i=0;i<n-1;i++){
       last = current; 
        current = result; 
        result = last + current;
    }
    console.log(last+" "+current);
}

function fibonacci(number){
    if( number==0){
        zerocount++
        return 0;
    }else if(number==1){
        onecount++;
        return 1;
    }else{
        return fibonacci(number-1)+fibonacci(number-2);

    }
}