var name1="webpage";
document.write(name1);
document.write("<br>");
let a=4;
let b=5;
add=a+b;
sub=a-b;
nul=a*b;
div=a/b;
document.write(a);
document.write("<br>");
str1="ring is the big size";
start=2;
end=5;
document.write(str1.substr(0,5));
document.write("<br>");
document.write(str1.slice(start,end));
document.write("<br>");
var name2=new Array;
name2[0]="mathi";
name2[1]="deva";
document.write(name2[1]);
document.write("<br>");
var animals=["tiger","lion","deer","dog"]
console.log(animals);
document.write(animals);
document.write("<br>");
document.write(animals.sort());
document.write("<br>");
function myarray()
{
    var season=['monson','automn','rain','sunny']
    document.write(season);
}
myarray();
document.write("<br>");
let myFunction=()=>{
    var num=45;
    document.write(num);
}
myFunction();
document.write("<br>");
const pen={
    personname:"rehan",
    pencolor:"red",
    penprice:25,
}
 console.log("The pen is purchased by ",pen.personname,"and pen color is",pen.pencolor,"it's price is ",pen.penprice);
//let per1="hari";
//let per2="harivar";
//if(per1===per2){
//    console.log("yes");
//}
//else
//{
//    console.log("no");
//}
//per1===per2 ? console.log("yes"):console.log("no");
//const animals1=['Tiger','Lion','Elephant','Deer',"wolf"]
//animals1.splice(3,2,'Cat','dog','frog');
//document.write(animals1);