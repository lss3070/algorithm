test();

function test(){
    let input = 2;
    let theNumberAtTheEnd = 665;
    while (input > 0) {
    theNumberAtTheEnd++;
    if (theNumberAtTheEnd.toString().includes('666')) {
    input--;
    }
    console.log(theNumberAtTheEnd);
}
}

