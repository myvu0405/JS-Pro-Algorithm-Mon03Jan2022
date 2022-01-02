//Monday: Game of 3s
function gameOfThree(n){

    let result=0;
    //let rest=0;
    let addNo=0;
    let no=n;
    while (result!=1) {
        //rest=no%3;
        if(no%3==0){
            result =no/3;
            addNo =0;
        }
        else if ((no+1)%3 ==0) {
            result=(no+1)/3;
            addNo=1;
        }
        else{
            result=(no-1)/3;
            addNo=-1;
        }

        console.log(`${no}    ${addNo}`);
        no=result;
    }
    console.log(result);
}

gameOfThree(100);
gameOfThree(200);