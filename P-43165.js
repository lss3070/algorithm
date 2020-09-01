
numbers=[1,2,3,4,1];
let target=3;
let result=0;
test();

function test(){

    JeaGi(0,0);
    console.log(result);

    function JeaGi(count,sum){
        if(count==numbers.length){
            if(sum==target)
            {
                result++;
            };
            return;
        }
        JeaGi(count+1,sum+numbers[count]);
        JeaGi(count+1,sum-numbers[count]);
        JeaGi(count+1,sum*numbers[count]);
    }
   
}

