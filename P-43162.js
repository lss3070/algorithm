
let count =0;
let checkList=[];
solution(3,	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]);



//기준점을 잡는 Index i
//그 기준점을 상대로 비교하는 ㅓ
//내부 비교 innerI

function solution(n, computers) {
    checkList= new Array(n);
    computers.forEach((element,i) => {
        if(!checkList[i]){
            dfs(checkList,i);
            // JeaGi(element,i);
            count++;
        }
    });

    console.log(count);

function dfs(checkList,n){
    checkList[n]=true;
    for(let i=0;i<computers[0].length;i++){
        if(!checkList[i]&&computers[n][i]==1){
            dfs(checkList,i);
        }
    }
}
}


//1,2,3,4가 주어진다, 여기서 1과 연결된 모든 노드의 값을 찾고 연결되었던 값들은 checklist에서
//체크를하여 두번 검사하지 않게끔 한다.그러고 체크안되었던 값들을 체크하여 나머지 노드 네트워크를 확인한다.


