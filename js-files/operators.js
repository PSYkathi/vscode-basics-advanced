document.writeln("<h1>hello<br>")

var a=10
var b=5
document.writeln(a+b)
document.writeln("<br>")

var c=10
var d=5
document.writeln(c-d)
document.writeln("<br>")

var e=10
var f=5
document.writeln(e*f)
document.writeln("<br>")

var g=10
var h=5
document.writeln(g/h)
document.writeln("<br>")

var i=1015.5
var j=5
document.writeln(i+j)
document.writeln("<br>")

var k=1015.5
var l=5
document.writeln(i<j)
document.writeln("<br>")

function add()
{
    var m=1015.5
    var n=5
    document.writeln(m>n)
}
add();

document.writeln("<br>")
var o=10
var p=5
if(o>p)
document.writeln("10 is larger")
else
document.writeln("5 is larger")

document.writeln("<br>")
var q=4;
switch(q)
{
    case 1:
        document.write("monday");
        break;
    case 2:
        document.write("tuesday");
        break;
    case 3:
        document.write("wednesday");
        break;
    case 4:
        document.write("thursday");
        break;
    case 5:
        document.write("friday");
        break;
    case 6:
        document.write("saturday");
        break;
    case 7:
        document.write("sunday");
        break;
    default:
        document.write("invalid number");
        break;
}

document.writeln("<br>")
var r=1
do{
    document.writeln(r+"<br>")
    r++;

}
while(r<=6)

document.writeln("<br>")
var s=1
while(s<=8){
    document.writeln(s+"<br>")
    s++;
}

document.writeln("<br>")
for(var t=1;t<=10;t++)
{
    document.writeln(t+"<br>")
}

document.writeln("<br>")
var u=["apple","orange","pinapple","panana"]
document.writeln(u+"<br>")
for(var i=0;i<u.length;i++)
{
    document.writeln(i +"th element is " +u[i]+",<br>")
}
u.push("guava")
document.writeln(u+"<br>")
u.unshift("poblos")
document.writeln(u+"<br>")
u.pop()
document.writeln(u+"<br>")
u.shift("orange")
document.writeln(u+"<br>")



