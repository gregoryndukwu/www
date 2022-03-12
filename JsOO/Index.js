import  {Cliente}       from "./Cliente.js";
import  {ContaCorrente} from "./ContaCorrente.js";



const client1 = new Cliente();
const client2 = new Cliente();

client1.nome = 'Gregory';
client1.cpf  = 123456789;


//client2.nome = 'Ricardo';
//client2.cpf  = 123123123;

const contaCorrenteGregory = new ContaCorrente();
contaCorrenteGregory.agencia = 1001;
contaCorrenteGregory.cliente = client1;
contaCorrenteGregory.depositar(1200)

const conta2 = new ContaCorrente();
conta2.cliente = client1;
conta2.agencia = 102;

console.log(conta2.cliente)

contaCorrenteGregory.transferir(400,conta2);
console.log(conta2.saldo)
/*
contaCorrenteGregory.depositar(100);
contaCorrenteGregory.depositar(600);

const valorSacado = contaCorrenteGregory.sacar(130);
console.log(valorSacado);
console.log(contaCorrenteGregory) */



