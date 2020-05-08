/* I FIRST DECLARE ALL MY VARIABLES WITH THIS FORMAT */
var one = document.getElementsByClassName("one");
var two = document.getElementsByClassName("two");

two[0].addEventListener("click",myfunc1);

/* THEN I PUT THE VARIABLES IN AN ARRAY */
var arr = ["pic1.png","pic2.png","pic3.png","pic4.png","pic5.png","pic6.png","pic8.png","pic9.png"]

/* THIS IS TO CHOOSE AN ELEMENT IN THE ARRAY AT RANDOM BETWEEN 0 TO 10 */
/* BUT NOTE THAT "Math.random()" CHOOSES A NUMBER BETWEEN 0 TO 10.99 AND Math.floor() THEN ROUNDS IT DOWN */

function myfunc1(){
var random = Math.floor(Math.random()*8);
one[0].style.backgroundImage = 'url(' + arr[random] + ')'	;
	}

myfunc1()
