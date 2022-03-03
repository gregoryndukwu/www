/*
1.	Define a function max() that takes two numbers as arguments and returns 
the largest of them. Use the if-then-else construct available in Javascript.
*/
console.log('HomeWork N° 1');
console.log(max(12, 13));
function max(a, b) {
    if (a == b) {
        return 'equals';
    }

    if (a > b) {
        return a;
    } else {
        if (a < b) {
            return b;
        }

    }
}
/*
2.	Define a function maxOfThree() that takes three numbers as arguments and 
returns the largest of them.
*/
console.log('HomeWork N° 2');
console.log(maxOfThree(1, 4, 0))

function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }

}
/*
3.	Write a function isVowel() that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, false otherwise.
*/
console.log('HomeWork N° 3');
console.log(isVowel('a'));

function isVowel(chc) {
    chc = chc.toLowerCase();
    return /^[aeiou]$/i.test(chc);

}
/*
4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, 
and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming 
approach (i.e. for…loop or while…loop)
*/
console.log('HomeWork N° 4');
console.log(sum())
function sum() {
    //let numbers = new Array('4,5,1,2,3');
    let numbers = [4, 5, 1, 2, 3];
    let c = 0;
    for (let i = 0; i < numbers.length; i++) {
        c = numbers[i] + c;
    }
    return c;
}

//Using Reduce
/*const number = [ 4,5,1,2,3];
const total = number.reduce((a, b) => a + b);
console.log('Using Reduce ' + total)*/
console.log('HomeWork N° 4 Mult');
console.log(mult())
function mult() {
    //let numbers = new Array('4,5,1,2,3');
    let numbers = [4, 5, 1, 2, 3];
    let c = 1;
    for (let i = 0; i < numbers.length; i++) {
        c = numbers[i] * c;
    }
    return c;
}
/*
5.	Define a function reverse() that computes the reversal of a string.
For example, reverse("jag testar") should return the string "ratset gaj".
*/
console.log('HomeWork N° 5');
console.log(reverse('Hello World'));
function reverse(word) {
    const size = word.length;
    var newWord = '';

    for (let i = size - 1; i >= 0; i--) {
        newWord = newWord.concat(word[i]);
    }
    return newWord;
}
/*
6.	Write a function findLongestWord() that takes an array of words and returns the 
length of the longest one.
*/
const arg = ["hello", "daddadad", "fatherfathe", "world"];
console.log('HomeWork N° 6');
console.log(findLongestWord(arg));
function findLongestWord(arg) {
    var compareSize = 0;
    for (let i = 0; i < arg.length; i++) {
        if (i > 0) {
            if (arg[i].length >= compareSize) {
                compareSize = arg[i].length;
                index = i;
            }
        } else {
            compareSize = arg[i].length;
            index = i;
        }    
    }
    return 'The Longest word is :'+ ' '+ arg[index] + ' The Size is : ' +compareSize;
}

/*
7.	Write a function filterLongWords() that takes an array of words and an integer i
 and returns a new array containing only those words that were longer than i characters.
*/
const arg7 = ["hello", "dad", "father", "world"];
const vlw = 5;
console.log('HomeWork N° 7');
console.log(filterLongWords(arg7,vlw));

function filterLongWords(arg7,vlw){
    let newArray = new Array();
    for (let i = 0; i < arg7.length; i++){

        if(arg7[i].length > vlw){
            newArray.push(arg7[i]);
        }

    }

    return newArray;
}
/*
8.	Write a function named, computeSumOfSquares, that takes as input, 
an array of numbers and calculates and returns the sum of the squares 
of each number in the input array. E.g. computeSumOfSquares([1,2,3]) 
should be computed as 12 + 22 +32 = 14. Note: Write your Javascript 
code without using Imperative programming. i.e. Do NOT use any explicit 
looping construct; instead use functional programming style/approach.
*/

const arg8 = [1,2,3];
console.log('HomeWork N° 8');
console.log('Using Map and Reduce')
console.log(computeSumOfSquares(arg8))

function computeSumOfSquares(num){
    let returnValue = num.map((num) => num * num);
    let totalSquare = returnValue.reduce((a, b) => a+ b)
    return totalSquare;
}

/*
9.	Write a function named, printOddNumbersOnly, that takes as input, 
an array of integral numbers and it finds and prints only the numbers which are odd.
*/
console.log('HomeWork N° 9');
const prize = parseInt(Math.random() * 50);
var arg9 = new Array();

for (let i = 0; i < prize; i++){
    arg9.push(i);
}
console.log(printOddNumbersOnly(arg9))

function printOddNumbersOnly(arg9){
    let newArray = new Array;
    for(let i = 0; i < arg9.length; i++ ){
        let result = arg9[i] % 2;
        if ( result != 0){
        newArray.push(arg9[i]);
        }
    }
    return newArray;
}
/*
10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input,
 an array of integral numbers and calculates and returns the sum of the squares 
 of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly 
 ([1,2,3,4,5]) should be computed as 22 +42 = 20.
*/
console.log('HomeWork N° 10');
const arraynumber = [1,2,3,4,5];

const totalsquare = arraynumber.reduce((a,b) => {
   if (b % 2 == 0){
    a = b * b + a;
   }
   return a;
},0);

console.log(totalsquare);
 
/*
11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
(defined in Problem 4 above) without using Imperative programming. i.e. 
Do NOT use any explicit looping construct; instead use functional programming style/approach. 
*/
const arraynumber11 = [1,2,3,4];

const totalSum = arraynumber11.reduce((x,y) => x + y);
const totalMul = arraynumber11.reduce((x,y) => x * y);
console.log('HomeWork N° 11');
console.log('The total of sum is :' +' ' + totalSum + ' '+ 'And Total Multi is :' + ' ' + totalMul)
/*
12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input,
 an array of numbers and finds and returns the second biggest of the numbers. For example, 
 findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) 
 should return 12. (Note: Do not use sorting!)
 */

const secondBiggest = [1,2,3,4,5];
const firstTeste = [19,9,11,0,12];

console.log('HomeWork N° 12');
console.log(secondBig(secondBiggest))
console.log('HomeWork N° 12 Second Sequence');
console.log(secondBig(firstTeste));
 function secondBig(secondBiggest){
      
    let fBig = 0;
    let sBig = 0;
    let lastValue = 0;
      
      for (let i = 0; i < secondBiggest.length;i++){    

        if (secondBiggest[i] > fBig ){
            fBig = secondBiggest[i];
        }
        if ( secondBiggest[i] < fBig  && secondBiggest[i] > sBig ) {
            sBig = secondBiggest[i]
        }
        if (lastValue < secondBiggest[i] && lastValue > sBig){
            sBig = lastValue;
        }
        lastValue = secondBiggest[i];
      }
      return sBig;
    }
      
/*
13.	Write a function named printFibo, that takes as input, a given length, 
n, and any two starting numbers a and b, and it prints-out 
the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, 
beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), 
prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as 
output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; 
and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
*/
const arg10 = [30,0,1];
console.log('HomeWork N° 13');
console.log(fibonacci(arg10));
function fibonacci(arg10){
    let i = 0;
    let arrayResult = new Array();
    
    while(i < arg10[0]){
        if (arrayResult.length == 0 ){
            arrayResult.push(arg10[1] + arg10[2]);
        }else if (arrayResult.length == 1) {
            arrayResult.push(arrayResult[i-1] + arg10[2]);
        }else if (arrayResult.length >= 2){
          arrayResult.push(arrayResult[i-1]  + arrayResult[i-2] )  
        }
        i++;
    }

    return arrayResult;
}