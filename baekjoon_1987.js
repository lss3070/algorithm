
// let input ="2 4\n\
// CAAB\n\
// ADCB".split("\n");


// let input ="20 20\n\
// YACDEFBXZJKVAXZXBSVA\n\
// BCDEFGHIJKLMNSVUTBSV\n\
// CDEFGHIJKLMNORTXUTBS\n\
// DEFGHIJKLMNOPQWZXUTW\n\
// AFGHIJKLMNOPQRSVZXWT\n\
// XGHIJKLMNOPQRSTBXZVU\n\
// WHIJKLMNOPQRSTUVWXZZ\n\
// HIJKLMNOPQRSTUVZXWZA\n\
// IJKLMNOPQRSTUVWXZZAB\n\
// JKLMNOPQRSTUVZXWZABC\n\
// TLMNOPQRSTUVWXWZABCD\n\
// QZNOPQRSTUVZXZZABCDE\n\
// ZRSPQRSTUVZXWZABCDEF\n\
// AVUXTSTUVZXWZABCDEFG\n\
// ZBWUAWXVWXWZABCDEFGH\n\
// ZRVWVUWAXZZABCDEFGHI\n\
// SRZVZVAXZZABCDEFGHIJ\n\
// TSRZSBUZZABCDEFGHIJK\n\
// QTSRTXZZABCDEFGHIJKL\n\
// CQTQQZZABCDEFGHIJKLM".split("\n");

// let input="20 20\n\
// YBCDEFGHUJZAQFOJRQXH\n\
// HAXNLTWMSKIVAPNOJZQD\n\
// PMCOSPIJQPREGQZPFLRU\n\
// VDGIWVDFHUAHFKUJHAOX\n\
// TQKLUZPLRQOQUVIDJOZI\n\
// ZFRJRTTHUGTJNIXKGUBC\n\
// UHPASLMQZAMRIKQJOEZA\n\
// MTZHFKJGJKQJKZWOAZAA\n\
// VUTGSVFQRITNFSBCEAAB\n\
// MWDQFTAKDFMGIOCEAABC\n\
// SQVFEQXRBAUPRMEAABCD\n\
// FGWUVWKIAENSCEAABCDE\n\
// KVSXEZXDENBHAAABCDEF\n\
// SEEJSKPENBPAAABCDEFG\n\
// NFUAWDUCHPFAABCDEFGH\n\
// SMLFVTRMHGAABCDEFGHI\n\
// HNINXFMFEAABCDEFGHIJ\n\
// FMJQJOGEAABCDEFGHIJK\n\
// QFOFOFEAABCDEFGHIJKL\n\
// AHFOAAAABCDEFGHIJKLM".split("\n");

let input = "3 4\n\
ABBC\n\
ECED\n\
FGDH".split("\n");

let movelist=[];
let maxcount=0;
let R;
let C;

solution();


function solution(){    
   let fir= input.shift().split(" ").map(e=>+e);
   R = fir[0];
   C = fir[1];

    input = input.map(e=>{
        return e.split("")
    })
    findCheck(0,0);
    console.log(maxcount);
}   

function findCheck(x,y){

    if(!movelist.includes(input[x][y])){
        maxcount++;
        movelist.push(input[x][y]);

        for(let i=-1;i<2;i+=2){

            if(x+i>=0&&x+i<R){
                findCheck(x+i,y);
            }

            if(y+i>=0&&y+i<C){
                findCheck(x,y+i);
            }
            
        }
    }
   
}

//백트래킹 다시하고 하자
