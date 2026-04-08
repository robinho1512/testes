let a = 40;
let b = 10;
let c = 20;
let total = 0;
let totald = 0;
let x = c;
x = 5;
total = a + b + c;      
totald = (a + b + c)/x;  
console.log("valor do total é:", total);
console.log("valor do totald é:", totald);
console.log(outraconta());
console.log(media());
console.log(Carro());
console.log(teste());
console.log(teste2());
console.log(teste3());
console.log(mediaSE());
console.log(frutas());

//inicio da function

function outraconta(){
    var d=10;
    var e=20;
    var f=30;
    var tot=0;
    var totd=0;
    var xx=100;
    tot= d+e+f;
    totd = (d+e+f)/xx;
    //console.log ("valor de tot é", tot);
    return tot;
    return totd;
    //console.log ("valor de totd é", totd);
}


function media(){
let nfinal= 0;
n1= 30;
n2= 90;
n3= 100;
nfinal= (n1+n2+n3)/3;
//console.log("A media final do aluno é:", nfinal.toFixed(1));
return nfinal.toFixed(1);
}

function Carro(){
    let carro1 = "Belina";
let km1 = 42;
let valorCombustivel1 = 6.30;

console.log("Carro: " + carro1);
console.log("Resultado: " + (km1 + valorCombustivel1));

let carro2 = "Azera";
let km2 = 89;
let valorCombustivel2 = 8.90;

console.log("Carro: " + carro2);
console.log("Resultado: " + (km2 + valorCombustivel2));
}

function teste (){
    console.log 
    ("hello word!");
    console.log
    (0123456789);
    console.log
    ("joao");
    x=8+9;
    console.log(x);
    y=81;
    z=9;
    m=y+z
    t=m+x
    console.log (m);
    console.log("O resultado é ",m)
    console.log("O outro resultado é",x)
    console.log("O resultado total é",t)
    
}
function teste2 (){
    B=32534;
A=12;
T=B*A/2;
console.log("O valor da área é",T)
}

function teste3 (){
    A=2;
    B=5;
    C=8;
    delta=(B,2) - 4*A*C;
    console.log("o resultado é",delta);
     
}

function mediaSE(){
    let aluno= "joao";
let n1=99;
let n2=100;
let n3=99;
let n4=100;
let media=0;
let result="";

media = (n1 + n2 + n3 + n4)/4;

if (media>=70){
    result="aprovado"
}else{
    result="repovado"
}
console.log("**** MEDIA.JS ***");
console.log("O aluno "+aluno+" tem a media "+media+" e está: "+result);
}

function frutas(){
    let frutas =[" maçã "," Banana "," Laranja "];
console.log(frutas.length); // saida 3
console.log(frutas);
frutas.push ('Manga');
console.log(frutas);
console.log(frutas.length); // Saida 4
frutas.pop();
frutas.pop();
console.log(frutas);
frutas.pop();
frutas.pop();  
console.log(frutas);
frutas.push(' Uva ');
frutas.push('amora');
frutas.push(' Mexirica ',' Abacate ',' Abacaxi ');
console.log(frutas);
console.log("A fruta na posição na posição 1 é: ", frutas[1]);
console.log("O Total de registros é: ", frutas.length+2+2, " frutas.");
frutas.unshift("Cereja");
console.log(frutas);
frutas.pop();
console.log(frutas);


}