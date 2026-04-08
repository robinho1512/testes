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
