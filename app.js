// Chapter#38-42



// Question#6


// function remove(str){
//     return str.replaceAll(/[aeiouAEIOU]/g,"")
// }
// console.log(remove("HELLO WORLD"));




// Question#7


// function isVowel(ch) {
//     switch (ch.toLowerCase()) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }
// function countVowelPairs(str) {
//     let count = 0;

//     for (let i = 0; i < str.length - 1; i++) {
//         if (isVowel(str[i]) && isVowel(str[i + 1])) {
//             console.log(str[i] + str[i + 1]);
//             count++;
//         }
//     }
//     return count;
// }
// let text = "Pleases read this application and give me gratuity";
// console.log("Total vowel pairs:", countVowelPairs(text));



// Question#8



// function meters(km){
//    var meters=km*1000;
//    return meters;
// }
// function feet(km){
//    var feet=km*3280.84;
//    return feet;
// }
// function centiMeters(km){
//    var centiMeters=km*100000;
//    return centiMeters;
// }
// function inches(km){
//    var inches=km*39370.1;
//    return inches;
// }
// console.log("Meters : ",meters(2));
// console.log("Feet : ",feet(2));
// console.log("centiMeters : ",centiMeters(2));
// console.log("Inches : ",inches(2));




// Question#9



// function calculateOvertime(hoursWorked) {
//     let overtimePay = 0;

//     if (hoursWorked > 40) {
//         let overtimeHours = hoursWorked - 40;
//         overtimePay = overtimeHours * 12;
//     }

//     return overtimePay;
// }

// let hours =  Fifty = 60;
// let result = calculateOvertime(hours);

// console.log("Overtime Pay: Rs.", result);




// Question#10


// function currencyDenominations(amount) {
//     let denominations = [100, 50, 20, 10, 5, 1];
//     let result = {};
//     for (let i = 0; i < denominations.length; i++) { 
//         let count = Math.floor(amount / denominations[i]);
//         if (count > 0) {
//             result[denominations[i]] = count;
//             amount -= count * denominations[i];
//         }
//     }    
//     return result;
// }   
// console.log(currencyDenominations(prompt("Enter your amount:")));




// Chapter#43-48




// Question#1

// function handleClick(){
//     alert("Button Clicked!");
// }  

// Question#2

// function mobileName(a){
//    let mobile=a;
//    alert(mobile);
// }

// Question#3

// function del(btn){
//     btn.parentNode.parentNode.remove();
// }


// Question#5


// let c = 0;

// function inc() {
//     document.getElementById("count").innerHTML = ++c;
// }

// function dec() {
//     document.getElementById("count").innerHTML = --c;
// }



// Chapter#49-52

// Question#1


// function validateForm() {
//     var name = document.querySelector("#name").value;
//     var email = document.querySelector("#email").value;

//     var result = document.querySelector("#formData");

//     result.innerHTML = "Name: " + name + "<br>Email: " + email;
//     return false;
// }



// Question#2


// function readMore() {
//     var more= document.querySelector("#more");
//     more.style.display = "inline";
// }


// Question#3


// function addStudent(){
//     let name = document.getElementById("name").value;

//     let row = tbl.insertRow();
//     row.insertCell(0).innerHTML = name;
//     row.insertCell(1).innerHTML =
//     "<button onclick='this.parentNode.parentNode.remove()'>Delete</button> " +
//     "<button onclick='editRow(this)'>Edit</button>";
// }

// function editRow(btn){
//     let row = btn.parentNode.parentNode;
//     document.getElementById("editForm").style.display = "block";
//     document.getElementById("editName").value =
//     row.cells[0].innerHTML;
// }


// Chapter#58-67

// Question#1


// i. Display  id "main-content" 

// var mainContent = document.getElementById("main-content");

// // ii. Display all child elements
// for(var i = 0; i < mainContent.children.length; i++){
//     console.log(mainContent.children[i]);
// }

// // iii. Show innerHTML of all elements having class "render"
// var renderElements = document.getElementsByClassName("render");

// for(var i = 0; i < renderElements.length; i++){
//     document.write(renderElements[i].innerHTML + "<br>");
// }

// // iv. Fill first-name input
// document.getElementById("first-name").value = "Alex";

// // v. Fill last-name and email inputs
// document.getElementById("last-name").value = "Bank";
// document.getElementById("email").value = "alexbank@example.com";


// // Question#2

//      // i.

// var form = document.getElementById("form-content");
// document.write("Node type of form-content:", form.nodeType);



//      // ii.
// var lastName = document.getElementById("lastName");
// document.write("Node type of lastName:", lastName.nodeType);


//      // iii.

// document.getElementById("lastName").innerHTML ="Last Name: Khan";

//      // iv.

// var main = document.getElementById("main-content");

// document.write(main.firstElementChild.innerHTML + "<br>");
// document.write(main.lastElementChild.innerHTML);


//      // v.

// var last = document.getElementById("lastName");

// document.write(last.previousElementSibling.innerHTML + "<br>");
// document.write(last.nextElementSibling.innerHTML);
