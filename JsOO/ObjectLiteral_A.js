let nome = "Goku",
    idade = 40;

// Crianto Objeto
var personagem = {
    nome: nome,
    idade: idade,

    superSayajin: function(){
        console.log("Atingido!!!");
    }

}

console.log(personagem)

personagem.prototype.toString = function toStringCustomizada() {
    return 'minha string customizada'
}
