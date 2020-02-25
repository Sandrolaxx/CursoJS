// ------------------------------ Aula 11 - Trabalhando com DOM ------------------------------
// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
// console.log(conteudo_caixa);

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// document.getElementById("caixa_amarela").innerHTML = "<h1>" + conteudo_caixa + "</h1>";//Podemos fazer alterações, no HTML com o js

// ------------------------------ Aula 12 - Funções ------------------------------
// function soma_numeros() { //Função estatica
// 		var x = 5;
// 		var y = 2;
// 		var soma  = x + y;
// 		console.log(soma);   
// }
// soma_numeros(); // O console mostrará 7

// function soma_args(num1,num2) {//Função Dinâmica
// 		var soma  = num1 + num2;
// 		console.log(soma); 
// }
// /* Agora ao invocar a função, temos necessariamente que atribuir valores para todos os argumentos, 
// na mesma ordem em que eles foram criados: */
// soma_args(10,25); // O console mostrará 35
// soma_args(1000,375); // O console mostrará 1375
// soma_args(-2,47); // O console mostrará 45

// //-Desafio do video-
// var peso = parseFloat(document.getElementById("peso").innerHTML);//cast para float, por que por padrão dados vindos do HTML são Strings.
// var altura = parseFloat(document.getElementById("altura").innerHTML);

// function valor_imc(peso,altura) {
// 		var imc = peso / (altura * altura);
// 		return imc;
// }

// valor_imc(peso, altura);

// document.getElementById("imc").innerHTML = valor_imc(peso, altura).toFixed(2);//toFixed para formatarmos o número de quantas números
 																                //após a virgula virão, formatar as casas decimais.

// ------------------------------ Aula 13 - Tipos de Dados - Arrays(Vetor) ------------------------------	
// var alunos = [ "João" , "Maria", "José" ];
// var num_primos = [ 2, 3, 5, 7, 11, 13 ];

// console.log(alunos.length); // o console mostrará 3
// console.log(alunos[0]);  // o console mostrará "João"

// var grupos = [ // Array de arrays
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length); // o console mostrará 3
// console.log(grupos[1]);  // o console mostrará [ "Pedro" , "Joana", "André", "Júlio" ]   
// /* podemos acessar também os elementos internos de cada grupo, basta usar a notação do índice duas vezes */

// console.log(grupos[1][2]);  // o console mostrará "André" 

// //Operação com Arrays
// var cursos = [ "HTML", "Python", "PHP" ];
// cursos.push("Javascript");
// console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

// cursos.unshift("Bootstrap");
// console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

// cursos.pop();
// console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

// cursos.shift();
// console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]    

// var ingredientes = [ "pão branco", "queijo", "presunto" ];

// ingredientes[0] = "pão integral";

// console.log(ingredientes);  // O console mostrará [ "pão integral", "queijo", "presunto" ]

// var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
// console.log( alunos.slice(0,3) );// O console mostrará [ "João" , "Maria", "José" ]
// console.log( alunos.slice(,-2) );// O console mostrará [ "João" , "Maria", "José", "Fernanda" ]
// /* O slice começa no primeiro elemento, e vai até o penúltimo elemento, neste caso o índice 4, 
// com este elemento excluído. */
// console.log( alunos.slice(-3,) );// O console mostrará [ "Fernanda", "Pedro", "Elisa" ]
// // O slice inclui os três últimos elementos.


// ------------------------------ Aula 14 - Tipos de Dados - Objetos ------------------------------
//Exemplo de Objeto:
// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log( funcionario['cpf'] ); //  O console mostrará '111.111.111.11'

// console.log( funcionario.cpf ); // Podemos usar a notação com ponto (dot notation)
// var teste = {
//     'chave1': 'Algum valor',
//     '2a': 'Algum valor 2',
//     '09335': 'Algum valor 3'
//     'ola-mundo': 'Algum valor 4'
// }; 
// a 'chave1' pode ser acessada usando a notação com ponto.

// console.log( teste.chave1 );  // O console mostrará 'Algum valor'

// // a outras chaves não podem usar esta notação porque não respeitam as regras dos identificadores.    

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// funcionario.cargo = 'Gerente de T.I.';  // alterar um valor associado a uma chave existente
// funcionario.cnh = '1982736654';  // adicionar uma nova dupla de chave e valor

// console.log(funcionario); 

// /* O console mostrará:

// {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas',
//     'cnh': '1982736654'
// }; */

// //Desafio do video-
// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];

// console.log(cursos[1].categorias[0]);   

// cursos[2].categorias[1] = "Administração de Empresas"; 
// console.log(cursos);
// console.log(cursos[2].categorias[1]);

// ------------------------------ Aula 15 - Métodos de Objetos ------------------------------
// var aluno = {
//     'nome': 'Maria',
//     'sobrenome': 'Pereira',
//     "ano_nasc" : 1992,
//     "idade"    : function(){//Desafio do Video
//     	var Idade = 2020 - this.ano_nasc;
//     	return Idade;
//     },
//    'nome_completo': function() {//Exemplo de método
//         var nomeCompleto = this.nome + ' ' + this.sobrenome;
//         return nomeCompleto;
//     }
// }

// console.log(aluno.nome_completo());
// console.log("A idade dela é: " + aluno.idade());

// console.log('Hello World'); // log é um método do objeto console 

// Math.round(2.7);  // round é um método do objeto Math

// var num = 3; 
// var num_string = num.toString(); // toString é um método que pode ser aplicado a qualquer tipo de dados.

// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;  // getElementById é um método do objeto document.
// // innerHTML é propriedade do objeto que o método getElementById retorna.


// var cursos = [ "HTML", "Python", "PHP" ];
// cursos.push("Javascript"); // push é um método que pode ser aplicado em arrays.    

