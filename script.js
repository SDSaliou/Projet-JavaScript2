//String Manipulation Functions:
    //Reverse a String: Write a function that reverses a given string
    //debut Fonction
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
//fin fonction et Appel à inserer 
var str= prompt('quel mot ou groupe de mot vouliez vous inverser: ', "");
var renverser = reverseString(str);
//appel fonction
console.log(reverseString(str));
alert ('le mot inversé est :' + renverser );

//Count Characters: Create a function that counts the number of characters in a string
   
function ComptCaractere(str) {
    return str.length;
}
var str= prompt('quel mot vouliez-vous compter: ', "");
var compt = ComptCaractere(str);
alert ('le mot compte :' + compt + ' caracteres');
console.log(ComptCaractere(str)); 
//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence 
   //Array Functions:
   //Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
 
   function MAXandMin(array){
    var max=- Infinity;
    var min=Infinity;
    for ( var i = 0; i < array.length; i++){
        if (array[i] > max){
            max=array[i];
        }
        if(array[i] < min){
            min=array[i];
        }
     }
return 'le Maximum est ' + max + ' et le minimum est ' + min ;
}
 //exemple
 var array=[1,-5,8,0,6,9,2,3,9]
 var maxmim= MAXandMin(array)
 console.log(MAXandMin(array));
 alert (maxmim);
//Sum of Array: Create a function that calculates the sum of all elements in an array
function SumArr(arr){
    var sum = 0;
    for ( var i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
return 'la somme est' + sum  
}
//exemple
var arr=[1,-5,8,0,6,9,2,3,9]
console.log(SumArr(arr));
//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
   }
    var array = [1, 2, -1,6,3, 4, 5];
    const num = (n)=> n>2;
    console.log(filterArray(array, num));
    //Mathematical Functions:
    //Factorial: Write a function to calculate the factorial of a given number
    function Factorial(n){
        if (n === 0 || n === 1) {
            return 1
        }else {
            var n_ =1;
            for (var i = 1; i <=n; i++){
                n_*= i;
            }
        } return n_;
       
    }
    //appel à inserer et executer fonction
    var str= prompt('quel nombre vouliez-vous factoriser: ', "");
    var compt = Factorial(str);
    alert (str +'!= ' + compt );
    //exemple
    console.log(Factorial(10));
    //Prime Number Check: Create a function to check if a number is prime or not.
    function NumPrime(num) {
        if (num <= 1){
            return "c'est pas un premier";
        } else if (num === 2) {
            return "C'est un nombre premier"; 
        } else if (num % 2 === 0) {
            return "Ce n'est pas un nombre premier"; 
        }
        for (let i = 3;i <= num; i += 2) {
            if (num % i === 0) return "c'est pas un premier";
        }
        return "c'est un premier";
    }
    //appel à inserer et executer fonction
    var str= prompt('Entrez le nombre : ', "");
    var compt = NumPrime(str);
    alert (compt);
    //Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
    function fibonacci(n) {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
             sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    return sequence.slice(0, n);
    }

    console.log(fibonacci(5));