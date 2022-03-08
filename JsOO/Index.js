class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    
}

const client1 = new Cliente();
const client2 = new Cliente();

client1.nome = 'Gregory';
client1.cpf  = 123456789;
client1.agencia = 1001;
client1.saldo = 0.0;

client2.nome = 'Ricardo';
client2.cpf  = 123123123;
client2.agencia = 1001;
client2.saldo = 100.00;

console.log(client1)
console.log(client2)


