
function print_current_page()
{
window.print();

}

function date(){
	var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
  
  
	var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 



if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;

document.getElementById("Date").innerHTML = today + '<br>' +"Current Time: "+ hour + ":" + minute + ":" + second + prepand 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

}





function cToF(celsius) 
{
  var cTemp = celsius;
  cTemp = document.getElementById("Celsius").value;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  document.getElementById("result1").innerHTML = message;
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  
    console.log(message);
	fTemp = document.getElementById("Fahrenheit").value;
	var fToCel = (fTemp - 32) * 5 / 9;
	var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';	
	document.getElementById("result2").innerHTML = message;
} 


function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function birthDay(){

today=new Date();
var cmas=new Date(today.getFullYear(), 9, 14);
if (today.getMonth()==10 && today.getDate()>14) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days until my brithday!");
document.getElementById("BirthDay").innerHTML = Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days until my birthday!";	
}

function christmasDay(){

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days until my brithday!");
document.getElementById("Christmas").innerHTML = Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!";	
}


function areaTriangle(){
var side1 = document.getElementById("1").value; 
var side2 = document.getElementById("2").value;
var side3 = document.getElementById("3").value;

var perimeter = (parseInt(side1) + parseInt(side2) + parseInt(side3))/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
document.getElementById("Triangle").innerHTML = area;
}


function numberGuess(){
	
	// Get a random integer from 1 to 10 inclusive
 var num = Math.ceil(Math.random() * 10);

 var gnum = document.getElementById("guess").value;  
 
 if (gnum == num)
	 document.getElementById("guessanswer").innerHTML = "Correct"
  else
	 document.getElementById("guessanswer").innerHTML = "Incorrect, the number was " + num;   

}

function leapYear() {
	
	year = document.getElementById("year").value;  
	x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
	if (x == true)
	{
	document.getElementById("leapyear").innerHTML = year + " is a leap year!";
	}
	else
		document.getElementById("leapyear").innerHTML = year + " is not a leap year..";
	
}


