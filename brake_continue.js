let carros_estacionados = 0;
const limitemaximo = 8;
console.log("---iniciando verificação de vagas ---");
for (let vaga= 1; vaga<= 10; vaga++){
    if (vaga=== 4 || vaga===7){
        console.log(` vaga $ {vaga}: [interditada] - Pulando... `);continue;}
    carros_estacionados++;
    console.log(`vaga $ {vaga}: [livre]->carro estacionado!(total:${carros_estacionados})`);
    if(carros_estacionados=== limitemaximo){
        console.log("---LIMITE ATINGIDO! fechar portão ---");
        break;}
        console.log("relatorio final: Operação de entrada Encerrada");
}