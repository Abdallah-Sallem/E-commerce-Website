console.log(15+96);
function sample() 
{
    alert('hello from sample.js!');
}
function change()
{
    document.getElementById("demo").innerHTML = "bonjour 2";
}
annee=prompt('En quelle année somme-nous?',2000)
alert('vous avez répondu:'+annee);
function sum(){
    var sum=0;
    for(var i=0;i<arguments.length;i++)
        sum+=parseInt(arguments[i]);
    return sum;
}
alert(sum(20,36,45,9))
var messageBox=function(){console.log("Toto");};
var messageBox2 = messageBox;

var helloWorld = function (people) { console.log("Hello " + people + "!");
};

messageBox = function () { console.log("Titi"); };

(function (n) { console.log(n*-1); })(48); //Fonction anonyme auto-appelée

messageBox2(); //Quel est le résultat de cet appel ?

helloWorld("Tata"); //Quel est le résultat de cet appel ?
y=(5=='5')? true: false;
alert(y);
var cars =
['BMW', 'Volvo', 'Mini'];
var x;
for (x of cars) {
    document.write(x + "<br>");
}
var txt = 'JavaScript';
var z;
for (z of txt) {
document.write(z+ "<br>");}
var a = 0;

var b = true;

if (typeof(a)=="undefined" || typeof(b)=="undefined") {
    document.write("Variable a or b is undefined.");
}

else if (!a && b) {
    document.write("a==0; b==true;");
} 
else {
    document.write("a==" + a + "; b==" + b + ";");
}

age=prompt('Donner votre age',62);
while (age<0 || age>120){

    alert('lage est  non valide');
    age=prompt('Donner votre age','type here');
    
}
alert('l age est  ' +age);
function color(){
    document.bgColor="#FFFggF";
}
d=new Date();
console.log(d);
d1=new Date(2024,01);
console.log(d1);
function AfficheJour(){
    const jours=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];

    d= new Date();
    
    console.log(d.getDay());

}


function mo3adel(){
    alert("note DS : ")
    ds=parseFloat(prompt('Donner DS','type here'));
    alert("note examen  : ");
    examen=parseFloat(prompt('Examen', 'type here'));
    moy=(ds+examen)/(2) ;
    maxi=(ds>examen)?ds:examen;
    alert("la moyenne : "+moy);
    alert("max : "+maxi);

}
mo3adel();
function ma9loub(){
    name=document.getElementById("nameInput").value;
    list=name.split();
    list.reverse();
    name=list.join();
    document.getElementById("result").innerHTML=`${name}`;
}
ma9loub();