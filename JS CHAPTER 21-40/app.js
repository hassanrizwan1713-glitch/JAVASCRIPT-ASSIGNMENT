// Chapter#21-25

// Question#1

// var firstname=prompt("Enter your First Name");
//  var lastname=prompt("Enter your Last Name");

// var fullname= (firstname+" "+lastname);

// console.log(fullname);

// Question#2


// var favmob=prompt("Enter your favourite mobile name :");

// var moblength=favmob.trim();

// console.log("My favourite phone is:"+favmob);
// console.log("Length of strings:"+moblength.length);


// Question#3


// var str="Pakistani";

// index=str.indexOf("n");

// console.log("Strings: "+str);
// console.log("Index of 'n': "+index);


// Question#4


// var str="Hello World"

// index=str.lastIndexOf("l");

// console.log("Strings: "+str);
// console.log("Last index of 'l': "+index);


// Question#5


// var str="Pakistani";

// index=str[3];

// console.log("Strings: "+str);
// console.log("Index of 'n': "+index);



// Question#6


// var firstname=prompt("Enter your First Name");
//  var lastname=prompt("Enter your Last Name");

// var fullname= firstname.concat(" ",lastname)

// console.log(fullname);


// Question#7


// var city="Hyderabad";

// var replacement= city.replace("Hyder","Islam");

// console.log("City: "+city);

// console.log("After replacement: "+replacement);


// Question#8


// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var result=message.replaceAll("and","&");

// console.log(result);


// Question#9


// var str="472";

// console.log("Value: "+str);

// console.log("Type: "+typeof str);

// num=Number(str);

// console.log("Value: "+num);

// console.log("Type: "+typeof num);


// Question#10


// let userinput="peanuts";

// console.log("User input: "+userinput);

// console.log("Upper case: "+userinput.toUpperCase());



// Question#11


// var userinput="javascript";

// console.log("User input: "+userinput);

// var titlecase=userinput.charAt(0).toUpperCase() + userinput.slice(1).toLowerCase();

// console.log("Title case: "+titlecase);


// Question#12


// var num=35.36;

// var str=num.toString().replace(".","");

// console.log("Number: "+num);

// console.log("Result: "+str);


// Question#13


//  var username = prompt("Enter your username:");

//     var isValid = true;

//     for (var i = 0; i < username.length; i++) {
//         var code = username.charCodeAt(i);

//         if (code === 64 || code === 46 || code === 44 || code === 33) {
//             isValid = false;
//             break;
//         }
//     }

//     if (isValid) {
//         console.log("Valid Username:", username);
//     } else {
//         console.log("Invalid Username! Please enter without @ . , !");
//     }


// Question#14

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// var user=prompt("enter your item :");

// var isValid=false;

// var rtn =user.toLowerCase()

// for(var i = 0;i < bakery.length;i++){
// if (rtn===bakery[i].toLowerCase()){
//     console.log(user + " is available at index " + i + " in our bakery");
//     isValid=true;
//     break;
// }
// }
// if (!isValid) {
//     console.log("We are sorry. " + user + " is not available in our bakery");
// }


// Question#15



// let password=prompt("Enter your password:");

// if(password.length<6){

//     console.log("Password must be at least 6 characters long");

// }else if(!isNaN(password[0])){

//         console.log("Password cannot begin with a number");

//     }else if(!/^[A-Za-z0-9]+$/.test(password)){

//     console.log("Password must contain only alphabets and numbers");

// }else{

//     console.log("Valid password");

// }



// Question#16



// var university = "University of Karachi";

// var rtn=university.split("");

// for(var i=0;i<rtn.length;i++)

// console.log(rtn[i]);


// Question#17


// var country=prompt("Enter your country name:");

// console.log("User input :"+country);

// var rtn=country[country.length-1];

// console.log("Last character of input:"+rtn);



// Question#18


// var text = "The quick brown fox jumps over the lazy dog";

// console.log("Text:"+text);

// var text=text.toLowerCase().split(" ");

// var count=0;

// for(let word of text){

//     if(word==="the"){

//     count++}
// }

// console.log("There are "+count+" occurrence(s) of word 'the'");



// Chapter#26-30



// Question#1


// var num= +prompt("Enter a positive number:");

// console.log("Number:",num)
// console.log("Round of value:",Math.round(num));
// console.log("Floor value:",Math.floor(num));
// console.log("Ceil value:",Math.ceil(num));


// Question#2


// var num= -prompt("Enter a negative number:");

// console.log("Number:",num)
// console.log("Round of value:",Math.round(num));
// console.log("Floor value:",Math.floor(num));
// console.log("Ceil value:",Math.ceil(num));


// Question#3

// var num= prompt("Enter a number:");

// var rtn=Math.abs(num);
// console.log("The absolute value of ",num," is ",rtn);


// Question#4


//  let random = Math.floor(Math.random()*6)+1;

//  console.log("Random dice value :",random);


// Question#5

//  let random_num = Math.floor(Math.random()*2)+1;

//  console.log(random_num)

//  let toss;
//  if (random_num==2){
//     toss="Heads";
//  }else if (random_num==1){
//     toss="Tails";
//  }
//  console.log("Random coin value :",toss);


// Question#6


// let random_num=Math.floor(Math.random()*100);

// console.log("random number between 1 and 100:",random_num);


// Question#7

// var weight=prompt("Enter your weight :");

// var userweight=parseFloat(weight);

// if(!isNaN(userweight)){
//     console.log("Your weight is: ",userweight," kg ");
// }else{
//     console.log("Invalid input. Please enter a valid weight.")
// }


// Question#8


// var secretnum=Math.floor(Math.random()*10)+1;

// var userguess=parseFloat(prompt("Guess the secret number between 1 and 10:"));

// if(secretnum===userguess){
//     console.log("Congratulations! You guessed the secret number is: ",userguess);
// }else{

//     console.log("Sorry, the secret number was: ",secretnum,". Try again!")
// }




// Chapter#31-34



// Question#1


// let date=new Date();

// console.log("Current Date and Time is :", date);


// Question#2

// let date=new Date();

// let month=date.getMonth();

// let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log("Current Month is: " ,monthNames[month]);



// Question#3


// let date=new Date();

// let day=date.getDay();

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// console.log("Current day is: "+dayNames[day]);



// Question#4


// let date=new Date();

// let day=date.getDay();

// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// let Currentday=day[dayNames];

// if (Currentday == "Sunday" || Currentday == "Saturday"){
//     console.log("It,s fun day");
// }else{
//     console.log("It's a Working Day");
// }


// Question#5

// var Currentdate=new Date();
// var date=Currentdate.getDate();
// if(date < 16){
//     console.log("First fifteen days of the month");
// }else{
//     console.log("Last days of the month");
// }



// Question#6



// var date=new Date();
// var milisecond=date.getTime();
// var minutes=milisecond/(60 * 1000);
// console.log("Current Date:",date);
// console.log("Elapsed milliseconds since January 1, 1970:",milisecond);
// console.log("Elapsed minutes since January 1, 1970:",minutes);



// Question#7



// var date=new Date();
// var hour=date.getHours();
// if(hour<=12){
//     console.log("It's PM");
// }else{
//     console.log("It's AM");
// }



// Question#8


// var date=new Date(2020,11,31);
// console.log("Later date: ",date);



// Question#9

// var ramadandate=new Date(2027,2,8);
// var currenttime=new Date();
// var timediff=ramadandate.getTime()-currenttime.getTime();
// var ramadantime=Math.floor(timediff/(1000*60*60*24));
// console.log(ramadantime+" days have passed since 1st Ramadan, 2027");



// Question#10

// var referdate=new Date(2015,12,5);
// var currentdate=new Date();
// var timediff=currentdate.getTime()-referdate.getTime();
// var secondpassed=Math.floor(timediff/1000);
// console.log("On reference date"+referdate);
// console.log(secondpassed+" seconds had passed since beginning of 2015");



// Question#11

// var date=new Date();
// var onehourago=new Date(date.getTime() - (60*60*1000));
// console.log("Current date:",date);
// console.log("1 hour ago, it was",onehourago);




// Question#12


// var currentdate=new Date();
// var currentyear=currentdate.getTime();
// var hundredyerago=new Date(currentdate.getTime()-(100*365*24*60*60*1000));
// console.log("Current date:"+currentdate);
// console.log("100 years back, it was"+hundredyerago);



// Question#13


// var userage=parseInt(prompt("Enter your age:"));
// var currentdate=new Date();
// var age=currentdate.getFullYear();
// var yearofbirth=age-userage;
// console.log("Your age is: " + userage);
// console.log("Your Birth Year is: " + yearofbirth);



// Question#14


// var customerName = "Hassan";
// var currentMonth = new Date().getMonth();
// var monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var numberOfUnits = 410;
// var chargePerUnit = 16;
// var netAmountPayable = numberOfUnits * chargePerUnit;
// var latePaymentSurcharge = 350;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// console.log("Customer Name: " + customerName);
// console.log("Month: " + monthNames[currentMonth]);
// console.log("Number of Units: " + numberOfUnits);
// console.log("Charges Per Unit: " + chargePerUnit);
// console.log("Net Amount Payable (within Due Date): " + netAmountPayable);
// console.log("Late Payment Surcharge: " + latePaymentSurcharge);
// console.log("Gross Amount Payable (after Due Date): " + grossAmountPayable);




// Chapter#35-38



// Question#1

// function datetime (a1){
//     console.log(a1);

// }
// datetime(new Date());


// Question#2


// function username(a1,a2){

//     var fullname=a1+" "+a2;
//     console.log(fullname);
// }
// username(prompt("Enter your first name:"),prompt("Enter your last name:"));



// Question#3


// function addNumbers(a, b) {
//     return a+b;
// }
// var num1=parseFloat(prompt("Enter your first number :"));
// var num2=parseFloat(prompt("Enter your second number :"));
// var sum=addNumbers(num1,num2);
// console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);


// Question#4

// function calculator(num1,num2,operator){
//     switch(operator){
//         case "+":
//              result = num1 + num2;
//              break;

//         case "-":
//             result = num1 - num2;
//             break;

//         case "*":
//             result = num1 * num2;
//             break;

//         case "/":
//             result = num1 / num2;
//             break;

//         default:
//             console.log("Invalid operator")

//     }
//     return result;
// }
// var number1=prompt("Enter your first number:");
// var number2=prompt("Enter your second number:");
// var operator=prompt("Enter the operator (+, -, *, /):");
// var calaculatevalue=calculator(number1,number2,operator);
// console.log("The result of the calculation is: " + calaculatevalue);


// Question#5


// function square(num){
//     return num*num
// }
// var num=prompt("Enter a number :");
// var result= square(num);

// console.log("The square of " + num + " is: " + result);



// Question#6


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// var number = parseFloat(prompt("Enter a number:"));
// var factorialResult = factorial(number);
// console.log("The factorial of " + number + " is: " + factorialResult);



// Question#7



// function counting(start,end){
//     for (var i=start;i<=end;i++){
//         console.log(i)
//     }
// }
// var startnum=prompt("Enter the starting number:");
// var endnum=prompt("Enter the ending number:");
// counting(startnum,endnum);


// Question#8



// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     var hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular);
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
//     return hypotenuse;
// }
// var base = parseFloat(prompt("Enter the base of the triangle:"));
// var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));
// var hypotenuseResult = calculateHypotenuse(base, perpendicular);
// console.log("The length of the hypotenuse is: " + hypotenuseResult);



// Question#9


// function calculatevalue(width,height){
//     return width * height;
// }
// var width=prompt("Enter the width of the rectangle:");
// var height=prompt("Enter the height of the rectangle");
// var result=calculatevalue(width,height);
// console.log("The area of the rectangle is: " + result);




// Question#10



// function isPalindrome(str) {
//     var cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//     var reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr
// }
// var inputString = prompt("Enter a string:");
// var isPalindromeResult = isPalindrome(inputString);
// console.log("Is the string a palindrome? " + isPalindromeResult);




// Question#11



// function letter(a){
//     var words=a.split(" ");
//     for(var i=0;i<words.length;i++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }
// return words.join(" ");
// }
// var num=prompt("Enter your sentence:");
// console.log(letter(num));




// Question#12



// function max(str){
//     return str;
// }
// var sentence=prompt("Enter a sentence:");
// var word=sentence.split(" ");
// var largest=word[0];
// for(var i=0;i<word.length;i++){
//     if(word[i].length>largest.length){
//         largest =word[i];
//     }
// }
// var laregestword=max(largest);
// console.log(laregestword);



// Question#13



// function countLetter(str, letter) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter('JSResourcesS.com', 'o'));




// Question#14



// function calcCircumference(radius) {
//   const circumference = 2 * Math.PI * radius;
//   return "The circumference is " + circumference.toFixed(2);
// }

// function calcArea(radius) {
//   const area = Math.PI * radius * radius;
//   return "The area is " + area.toFixed(2);
// }

//
// console.log(calcCircumference(5));
// console.log(calcArea(5));




// Chapter#38-42


// Question#1


// function power(a,b){
//     let result=1;
//     for(var i=0;i<b;i++){
//        result= result * a;
//     }
//     return result;
// }


// Question#2


// function leapyear(year){
//     if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)){
//         return "Leap year";
//     }else{
//       return "Not a leap year";  
//     }
// }
// console.log(leapyear(2026));



// Question#3


// function triangleArea(a,b,c){
//     let S=(a+b+c)/2;
//     let area=Math.sqrt(S*(S -a)*(S-b)*(S-c));
//     return area;
// }
// console.log(triangleArea(2,3,4));


// Question#4



// function calculateAverage(marks) {
//     let total = 0;
//     for (var i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }
//     return total / marks.length;
// }
// function calculatePercentage(marks, totalmarks) {
//     let totlobtained = 0;
//     for (var i = 0; i < marks.length; i++) {
//         totlobtained += marks[i];
//     }
//     return (totlobtained / marks.length) * 100/100;
// }
//  function calculateGrade(percentage) {
//     if (percentage >= 90) {
//         return "A";
//     } else if (percentage >= 80) {
//         return "B";
//     } else if (percentage >= 70) {
//         return "C";
//     } else if (percentage >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// let marks = [85, 90, 78];
// let totalMarks = 300;

// let average = calculateAverage(marks);
// let percentage = calculatePercentage(marks, totalMarks);
// let grade = calculateGrade(percentage);

// console.log("Average Marks: " + Math.floor(average));
// console.log("Percentage: " + Math.floor(percentage) + " %");
// console.log("Grade: " + grade);



// Question#5



// function indexofchar(str,char){
//     for(var i=0;i<str.length;i++){
//         if(str[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }
