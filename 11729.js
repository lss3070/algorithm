let input =5;
let count =0;

let resultArray=new Array();

function test(){
    moveHanoiTower(1,2,3,input);
    showResult();
}

function moveHanoiTower(first,center,last,n){
    if(n==1){
        ++count 
        resultArray.push(first+" "+last);
    }else{
        moveHanoiTower(first,last,center,n-1);
        ++count;
        resultArray.push(first+" "+last);
        moveHanoiTower(center,first,last,n-1);
    }
}
function showResult(){
    console.log(count);
    resultArray.forEach(element=>{
        console.log(element);
    })
}

hanoi(5,0,1,2);
console.log(count);
function hanoi(num,from,to,other){
    //원반개수,
    if(num ===0) return;//종료 조건
    else{
        hanoi(num -1,from,other,to);//1. 기둥1에서 기둥2로 옮김
        console.log(from+"에서"+ to+"로 옮긴다")
        count++
        hanoi(num -1 ,other,to,from);//3 기둥2에43165서 기둥1로 옮김
    }  

}


//1. 기둥1에서 n-1개의 원반을 기둥3을 이용하여 기둥2로 옮길(재귀)
//2. 기둥1에서 1개의 원반을 기둥3으로 옮긴다.
//3. 기둥2에서 n-1개의 원반을 기둥1을 이용하여 기둥3으로 옮긴다....(재귀)

