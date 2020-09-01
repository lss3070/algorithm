
test(24,24);


function test(brown,yellow){
    let sum = brown +yellow;
    function getdivision(n){
        let tempList= [];
        for(let i=2;i<n;i++){
            if(n%i==0) tempList.push(i)
        }
        return tempList;
    }
    let divisonList=getdivision(sum);
    if(divisonList.length==1){
        return [divisonList[0],divisonList[0]];
    }else{
        for(let i=divisonList.length-1;i>0;i--){
          
            let back = Math.abs(i-divisonList.length+1);
            if((divisonList[i]-2)*(divisonList[back]-2)==yellow){
                console.log(divisonList[i]+","+divisonList[back])
            }
        }
    }
}
