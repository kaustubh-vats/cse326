var name=sessionStorage.getItem("Name");
if((name=="")||(name=="null"))
{
    document.getElementById("loginbutton").innerHTML="LogIn";
}
else
{
    document.getElementById("loginbutton").innerHTML=name;
}
var l=document.getElementById("login");
var s=document.getElementById("signup");
var p=document.getElementById("pass");
var after=document.getElementsByClassName("after");
var before=document.getElementById("before");
var txt=document.getElementById("txt");
function fun()
{
    p.style.display="none";
    s.style.display="none";
    l.style.display="block";
}
function nR()
{ 
    p.style.display="none";
    l.style.display="none";
    s.style.display="block";
}
function forget()
{
    p.style.display="block";
    l.style.display="none";
    s.style.display="none";
    after[0].style.display="none";
    after[1].style.display="none";
}
function otp()
{
    after[0].style.display="block";
    after[1].style.display="block";
    before.style.display="none";
    txt.innerHTML="Enter the OTP";
}
function change()
{
    name=document.getElementById("name1").value;
    if(name=="")
    {
        name=document.getElementById("name2").value;
    }
    alert("Welcome "+name);
    document.getElementById("loginbutton").innerHTML=name;
    sessionStorage.setItem("Name", name);
}
var k=0;
carousel();
function carousel()
{
    var i;
    var x=document.getElementsByClassName("Slideshow");
    for (i=0;i<x.length;i++)
    {
        x[i].style.display="none";  
    }
    k++;
    if(k>x.length)
    {
        k=1;
    }    
    x[k-1].style.display="block";  
    setTimeout(carousel, 4000);
}