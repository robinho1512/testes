// cria variavel q armazena uma lista ()
const usuarios = [             
    { nome: "Carlos", idade: 32 },
    { nome: "Ana", idade: 28 },
    { nome: "Felipe", idade: 40 }
]

      // Encontrando um objeto - o find vai buscar oo resultado - === exatamente igual     
     const ana = usuarios. find (usuario => usuario.nome === "Ana"); 
    console.log(ana);
    
    // Filtrando objetos
    const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30);"" 
    console.log(usuariosAcimaDe30);
    
    // Ordenando objetos por idade
    const usuariosOrdenadosPorIdade = usuarios.sort((a, b) => a.idade - b.idade); 
    console. log(usuariosOrdenadosPorIdade);

    // Ordenando objetos por idade
    const usuariosOrdenadosPorIdade2 = usuarios.sort((a, b) => b.idade - a.idade); 
    console. log(usuariosOrdenadosPorIdade2);