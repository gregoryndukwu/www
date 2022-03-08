const arg8 = [1,2,3];

console.log(findN(4,arg8))

function findN(a,num){
    var newArray = Array();
    if(a > num.length){
        console.log('Insufficient items');
    }else{
        for (let i = 0; i < a; i++){
            newArray.push(num[i])
        }
    }
    return newArray;
}


