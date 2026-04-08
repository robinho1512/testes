const ferramentas =["martelo","fita isolante","chave","trena","chave fenda"]
for(let i=0; i<ferramentas.length; i++){
    console.log("verificando:" + ferramentas[i]);
    if(ferramentas[i]==="chave"){
        console.log("***achei a ferramenta! parando a buscar");
        break;
    }
}