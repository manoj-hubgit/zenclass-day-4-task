//Programs in anonymous and IFFE function.

//a)Print odd numbers in an array

// //anonymous

// var result=[]
// let odd=function (arr){
// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
// }
// return result
// }
// console.log(odd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))

// //IFFE function

// var result = [];
// (function(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// console.log(result);

//b)Convert all the strings to title caps in a string array.

// //anonymous

// let titlecap=function (arr) {
//     let resultArray=[];
//   for (let i = 0; i < arr.length; i++) {
//     let splited = arr[i].split(" ");
//     for (let a = 0; a < splited.length; a++) {
//       let uppercase = splited[a][0].toUpperCase();
//       let newString = splited[a].slice(1);
//       splited[a] = uppercase + newString;
//     }
//     resultArray.push(splited.join(" "));
//   }
//   return resultArray;
// }
// console.log(titlecap(["hi", "hello", "there is a man","a"]));

// //IFFE function

// (function(arr) {
//     let resultArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let splited = arr[i].split(" ");
//         for (let a = 0; a < splited.length; a++) {
//             let uppercase = splited[a][0].toUpperCase();
//             let newString = splited[a].slice(1);
//             splited[a] = uppercase + newString;
//         }
//         resultArray.push(splited.join(" "));
//     }
//     console.log(resultArray);
// })(["hi", "hello", "there is a man", "a"]);

//c)Sum of all numbers in an array

// //anonymous

// var sumOfNumbers=0;
// let sum=function (arr)
// {
//   for(var i=0;i<arr.length;i++){
//     sumOfNumbers+=arr[i];
//   }
//   return sumOfNumbers
// }
// console.log(sum([2,4,6,8]))

// //IFFE function

// var sumOfNumbers = 0;
// (function(arr) {
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// })([2, 4, 6, 8]);

//d)Return all the prime numbers in an array

// //anonymous

// var primenum=[];
// let prime=function (arr){
//    for(var i=0;i<arr.length;i++){
//     var isprime=true;
//     for(var a=2;a<=Math.sqrt(arr[i]);a++){
//         if(arr[i]%a===0 &&arr[i]){
//             isprime=false;
//             break;
//         }
//         }
//         if(isprime===true && arr[i]>1){
//             primenum.push(arr[i]);
//         }
//     }
//        return primenum;
//    }
// console.log(prime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

// //IFFE function

// var primenum = [];
// (function(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var isprime = true;
//         for (var a = 2; a <= Math.sqrt(arr[i]); a++) {
//             if (arr[i] % a === 0 && arr[i]) {
//                 isprime = false;
//                 break;
//             }
//         }
//         if (isprime === true && arr[i] > 1) {
//             primenum.push(arr[i]);
//         }
//     }
//     console.log(primenum);
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


//e)Return all the palindromes in an array

// //anonymous

// var palindromeValue=[];
// let palindromes=function(pali)
// {
//     for(var i=0;i<pali.length;i++)
//     {
//         var stringSplit=pali[i].split('');
//         var stringrev=stringSplit.reverse();
//         var palindromerev= stringrev.join('');
//         if(pali[i]===palindromerev)
//         {
//             palindromeValue.push(pali[i]);
//         }
//     }
//     return palindromeValue;
// }
// console.log(palindromes(['pad','mom','table','chair','dad']))

// //IFFE function

// var palindromeValue = [];
// (function(pali) {
//     for (var i = 0; i < pali.length; i++) {
//         var stringSplit = pali[i].split('');
//         var stringrev = stringSplit.reverse();
//         var palindromerev = stringrev.join('');
//         if (pali[i] === palindromerev) {
//             palindromeValue.push(pali[i]);
//         }
//     }
//     console.log(palindromeValue);
// })(['pad', 'mom', 'table', 'chair', 'dad']);


//f)Return median of two sorted arrays of the same size.

// //anonymous

// let median=function (num1,num2){
//     let arr=num1.concat(num2);
//     arr.sort();
//     let l=arr.length;
//     if(l%2===0){
//         return((arr[l/2]+arr[l/2-1])/2);
//     }
//     else{
//         return arr[Math.floor(l/2)]
//     }
// }
// console.log(median([1,2,3,4],[5,6,8]));

// //IFFE function

// let median = (function (num1, num2) {
//     let arr = num1.concat(num2);
//     arr.sort();
//     let l = arr.length;
//     if (l % 2 === 0) {
//         return ((arr[l / 2] + arr[l / 2 - 1]) / 2);
//     } else {
//         return arr[Math.floor(l / 2)];
//     }
// })([1, 2, 3, 4], [5, 6, 8]);
// console.log(median);

// g)Remove duplicates from an array
// //anonymous

// duplicateCheck=function (duparr){
//     var noDuplicate=[];
//     for(var i=0;i<duparr.length;i++){
//         if(noDuplicate.length==0){
//             noDuplicate.push(duparr[i]);
//         }
//         if(noDuplicate.indexOf(duparr[i])=== -1){
//             noDuplicate.push(duparr[i]);
//         }
//     }
//     return noDuplicate
// }
// console.log(duplicateCheck([1,2,3,4,5,2,6,7,8,9,6]))

// //IFFE function

// var duplicateCheck = (function(duparr) {
//     var noDuplicate = [];
//     for (var i = 0; i < duparr.length; i++) {
//         if (noDuplicate.length == 0) {
//             noDuplicate.push(duparr[i]);
//         }
//         if (noDuplicate.indexOf(duparr[i]) === -1) {
//             noDuplicate.push(duparr[i]);
//         }
//     }
//     return noDuplicate;
// })([1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 6]);
// console.log(duplicateCheck);

//h)Rotate an array by k times
// //anonymous

// let rotate=function (rotaionarr,k)
// {
//     var sortedarr=rotaionarr.splice(rotaionarr.length-k);
//     for(i=0;i<sortedarr.length;i++)
//     {
//         rotaionarr.splice(i,0,sortedarr[i]);
//     }
//     return rotaionarr;
// }
// console.log(rotate([1,2,3,4,5,6,7,8],4))

// //IFFE function

// let rotatedArray = (function (rotaionarr, k) {
//     let sortedarr = rotaionarr.splice(rotaionarr.length - k);
//     for (let i = 0; i < sortedarr.length; i++) {
//         rotaionarr.splice(i, 0, sortedarr[i]);
//     }
//     return rotaionarr;
// })([1, 2, 3, 4, 5, 6, 7, 8], 4);
// console.log(rotatedArray);


                            // //Programs in arrow functions.

// //a)Print odd numbers in an array

// var result = [];
// ((arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// console.log(result);

// //b)Convert all the strings to title caps in a string array.

// ((arr) => {
//     let resultArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let splited = arr[i].split(" ");
//         for (let a = 0; a < splited.length; a++) {
//             let uppercase = splited[a][0].toUpperCase();
//             let newString = splited[a].slice(1);
//             splited[a] = uppercase + newString;
//         }
//         resultArray.push(splited.join(" "));
//     }
//     console.log(resultArray);
// })(["hi", "hello", "there is a man", "a"]);


// //c)Sum of all numbers in an array.

// var sumOfNumbers = 0;
// ((arr) => {
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// })([2, 4, 6, 8]);

// //d)Return all the prime numbers in an array.

// var primenum = [];
// ((arr) => {
//     for (var i = 0; i < arr.length; i++) {
//         var isprime = true;
//         for (var a = 2; a <= Math.sqrt(arr[i]); a++) {
//             if (arr[i] % a === 0 && arr[i]) {
//                 isprime = false;
//                 break;
//             }
//         }
//         if (isprime === true && arr[i] > 1) {
//             primenum.push(arr[i]);
//         }
//     }
//     console.log(primenum);
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


// //e)Return all the palindromes in an array.

// var palindromeValue = [];
// ((pali) => {
//     for (var i = 0; i < pali.length; i++) {
//         var stringSplit = pali[i].split('');
//         var stringrev = stringSplit.reverse();
//         var palindromerev = stringrev.join('');
//         if (pali[i] === palindromerev) {
//             palindromeValue.push(pali[i]);
//         }
//     }
//     console.log(palindromeValue);
// })(['pad', 'mom', 'table', 'chair', 'dad']);





