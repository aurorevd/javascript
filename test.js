function sum(a,b){
	return a+b;
}

function div(a,b){
	return a-b;
}

function modulus(a,b){
	return a%b;
}

function concat(string1,string2){
	return string1+" "+string2;
}
console.log(concat("aurore","Van Damme"));

function tvac(price){
	return price*1.21;
}
console.log(tvac(5));

function airecercle(rayon){
	return Math.PI * Math.pow(rayon,2);
}
console.log(airecercle(5));

var today = new Date();
var hours=today.getHours();
var minutes=today.getMinutes();
var sec=today.getSeconds(); 
function ts(){
	return hours*3600+minutes*60+sec;
}
//console.log(ts());

var age=10
if (age<25) {console.log(8)}
else {console.log(10)}

function max(a,b,c){
	if (a>b) {
		if (a>c) {return a} 
		else {return c}
}
	else {
		if (b>c) {return b} 
		else {return c}
} 
}

console.log(max(1,2,3));


function de(a,b,c){
if(a==b){
	if (b==c) {return 3}
	else {return 2}
	}
else if(a==c){return 2}
else if (b==c){return 2}
else {return 1}
}

console.log(de(0,1,1));

var today = new Date();
var day = today.getDay();
console.log(day)

var tranche1=0.12
var tranche2=0.11
var tranche3=0.1
function price (x){
if (x>0 && x<=10 ){return x*0.12}
else if (x>10 && x<=20) {return 10*tranche1+(x-10)*tranche2}
else if (x>20) {return 10*tranche1+10*tranche2+(x-20)*tranche3}
else {return 0}
}
console.log(price(20))

for (var i=1; i<=20; i++){console.log(i);}

for (var i=20; i>=0; i-- ){console.log(i);}

function count(n){
	for (var i=-n; i<=n; i++) {console.log(i);}
}

function nbimpairs(n){
	for (var i = 0; i <= n; i++) {
  if (i % 2 != 0) {console.log(i)}
}
}
nbimpairs(19)


// Generate a number between 0 and 100

function RandomInteger(max) {
    return Math.round(Math.random() * max);
}

function count(max){
for (var i=0; i<=RandomInteger(max); i++) {console.log(i);}
}

count(100);


//III - throw dices
function RandomInteger(max) {
    return Math.ceil(Math.random() * max);
}

function throwdice(x,y){
	let nb=0;
	let dice;
	for (var i=1; i<=x; i++){
		dice=RandomInteger(6)
		console.log(dice);
		if (dice==y){nb++};
	}
	console.log(nb);
}
throwdice (5,6)

// V - even numbers 

function pairs(n){
  for (var i=0; i<=n; i++) {
  if (i%2==0) {console.log(i)}
}
}
pairs(20)

function pairs(n){
  for (var i=0; i<=n; i+=2) {
   console.log(i)}
}

pairs(20)

var i=0;
function pair(n){
while (i<=n) {console.log(i);i+=2}
}
pair(20)



//III - minimum

//Write an algorithm which receives an array of integers and prints its minimum.

arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
min = Math.min(...arr)
console.log(min) 

// maximum
arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
max = Math.max(...arr)
console.log(max) 

// position minimum

arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
min = Math.min(...arr)

var minimumValueIndex = arr.indexOf(min);
console.log(minimumValueIndex);

// V - ordered array


arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
function order() {
	for (i = 0; i < arr.length; i++); { 
    if (arr[i] < arr[i + 1]) {
        return true;
    }
    else {
        return false;
    }
}
}

console.log(order());


