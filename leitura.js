const dados = require("./2.cliente.json");
console. log(dados);
console. log(typeof dados);
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente.nome);
console.log(objetoCliente);
