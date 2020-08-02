alert("hello world");// print on web browser   
console.log("hello world");// print on console  use command node filename
console.log(3321);//
document.write("my name is qasim");// show output on browser
document.write(3+2);//

var age=23;//statement 1
var nationality="pakistani";// it is a string //statement 2
var ispaid=true;// boolean operation //statement 3
age=44;

alert(age);
alert(nationality);
alert(ispaid);
console.log(age);
document.write(nationality);

var a=12;
var b;
b=19;
var c= a+b;
var f=c+33
document.write(c)
console.log(c)
console.log(f)
var h;// undefined variable
var s=null;// the value of variable is null means nothing
 
var name= "ali";
var no=12;
var ispaid=true;
console.log(typeof name)// tell us about type of data
console.log(typeof no)
console.log(typeof ispaid)

var a=2;var b=3;var c=a+b; // we can define multipple variable in a single line
alert(c)
console.log(c)

// Arithmetic operations
var a=12;
var b=43;
var c=a+b
alert(c)
console.log(c)
var c=a/b
console.log(c)
var a=12;
var b=5;
var c=a%b;
console.log(c)
var n=4;
var p=3;
var c=p**n;
console.log(c)

// Assignment operator
var a=12;
a=a+12
console.log(a)
var b=44;
b +=6;
console.log(b)

// Eleminting ambigity .... BODMAS
var a=33;
var b=22;
var c=12;
var sum = a+4 * b -c**2 /(a+c)
console.log(sum)
//increment and decrement
var a=12;
++a;
console.log(a)
document.write(a)
var b=3;
b--;
console.log(a)
document.write(a)
var c=a++ - --b + a--;
console.log(c)
//concatinating string it will concatinate the not add 
var name="ali";
var name1="khan";
var con=name +" "+name1;
alert (con)
console.log(con)
document.write(con)
var a = "6"+1;
alert(a)
var d="hello"+3
document.write(d)
var nm= 3+4+ "my name is khan";
document.write(nm)
console.log(nm)
var gd="hello"+(3+7);
console.log(gd)
// taking information from user the information always in string form
var name=prompt("what is your name " , "zulkifel");
console.log(name)
var agee=prompt("enter your age:")
console.log(agee)
var inc=agee + 5
console.log(inc)
// converting string into numbers or integers we use parseint function for this conversion
var your_age=prompt("enter your age");
var add_age=parseInt(your_age)+5;
console.log(add_age)
// converting string into floating values we use parseFloat
var num=prompt("enter your fav no");
var addd=7;
var rslt=parseFloat(num)+7;
console.log(rslt)
// Number functio is used to convert string into numbers 
var a1=prompt("enter number");
var a2=prompt("enter another num")
var a3=a1+Number(a2)
console.log(a3)
// 
var b =Number(true);
var b1=Number(false);
console.log(b)
console.log(b1)
var b3=("333 44");// number function not able to convert it 
console.log(b3)
// comparison operator are logical operator used in program to see equality or difference
var a=33;
console.log(a=='3')// take one variable and compare it to other
console.log(a===33.0)// both variables should be same
console.log(a>3)
console.log(a<3)
console.log(a!=3)
//comparison operators  and (&) logical and operator
var ai=40;
var ab= ai >30 && ai<45;
console.log(ab)
// logical or operator or(||)
var az=5;
var ax=az<5 || az>4;
console.log(ax)
// logical not operator no(!=)
var af=50;
var bf=!(a<50);
cinsole.log(bf)
