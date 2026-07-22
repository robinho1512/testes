function caucularmedia(numeros) {
    let soma = 0;
    let totalnumeros = numeros.length;
    for (let i = 0; i < totalnumeros; i++) {
        soma += numeros[i];
        console.log(i)
        console.log(numeros);
    }
    return soma / totalnumeros
}
console.log(caucularmedia([10, 20, 30]));
