// Write a program that prints the numbers from 1 to 100.
 // For multiples of three print “Fizz” instead of the number
 // For the multiples of five print “Buzz” instead of the number
 // For numbers which are multiples of both three and five print “FizzBuzz”

var message = "";
var searchField;
const input = document.getElementById('searchInput');
const searchNum = document.getElementById("searchNum");
const showResult = document.getElementById("showResult");

//for printing message
function print(message) {
    document.getElementById('showResult').innerHTML += message;
}

//for removing the previous error message or text
//and write over the old one, so it doesnot repeat.
function printRemove() {
    document.getElementById('showResult').innerHTML = '';
}

//function
searchNum.addEventListener("click", (e) =>{
e.preventDefault(); // stop the default setting of the browser
 printRemove();
 searchField = input.value;
 input.value = '';
 fizzbuzz(searchField);
});

//function
function fizzbuzz(searchField){

  while (isNaN(parseInt(searchField))){
   if(searchField == null || searchField == ""){
      alert("Please Enter a number");
      return false;
   }
 }
   for(var i = 1; i <=searchField; i++){
     if(i% 5 === 0 && i% 3 === 0){
      //print("Fizz Buzz" + "<br>");
      print("Fizz Buzz" + '  '  +  ' | ' +  ' ' ); // '&#09;' = tab
      continue;
    } else if(i % 3 === 0){
      //print("Fizz" + "<br>");
      print("Fizz " + '  '  +  ' | ' +  ' ');
      continue;

    }else if(i % 5 === 0){
      //print("Buzz" + "<br>");
      print("Buzz " + '  '  +  ' | ' +  ' ');
      continue;
    }
     //print(i + "<br>");
     print(i  + '  '  +  ' | ' +  ' ');

   }
   print('<br>');
};
