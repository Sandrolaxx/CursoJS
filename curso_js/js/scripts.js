// ------------------------------ Aula 19 - Eventos ------------------------------
// document.getElementById("click-me").onclick = function() {
//     alert('Você clicou no botão');
// };

// document.getElementById("hover-me").onmouseover = function() {
//     alert('Você passou o cursor por cima do botão');
// };

// document.getElementById("leave-me").onmouseout = function() {
//     alert('Você passou o cursor por cima do botão e depois saiu');
// };
// document.onkeydown = function() {
//     alert('Você apertou alguma tecla');
// };
// document.onkeydown = function() {
//      alert('Você apertou a tecla: ' + event.keyCode);
// };
// function show_alert() {//Poderiamos inserir funçoes diretamente no HTML
//     alert('Você clicou no botão');
// }

// ------------------------------ Aula 20 - Eventos ------------------------------
// document.getElementById("botao_cor").onclick = function() {
//  	document.getElementById("botao_cor").style['background-color'] = "purple";//por o background-color não respeitar a regra dos identificadores, não podemos usar o ponto, ex "style.background-color", isso não existe!.
//      document.getElementById("botao_cor").style.transform = "translateX(100px)";
// };

//Sempre temos de simplificar ao máximo o código: este acima poderiamos simplificar da seguinte forma:
// document.getElementById("botao_cor").onclick = function() {
//     this.style['background-color'] = "purple";
//     this.style.transform = "translateX(100px)";
// };
//ou também criar uma variavel e atribuir o valor a ela e depois utilizar o nome da variavel:
// botao.onclick = function() {
//     botao.style['background-color'] = "purple";
//     botao.style.transform = "translateX(100px)";
// };  //Prefiro a forma com this

// ------------------------------ Aula 21 - Eventos ------------------------------
// var elementos = document.getElementsByClassName("exemplo");
//     console.log(elementos);
// // O console retornará um array: [ {...}, {...}, {...} ]
// // Cada um destes objetos é um dos elementos que possuem a classe "exemplo".
// elementos[0].innerHTML = "Texto do elemento 1";

// var paragrafos = document.getElementsByTagName("p");
// 	console.log(paragrafos);
// // O console retornará um array: [ {...}, {...}, {...} ]
// //Editando o H3 mo trampo!!
// var malditoH3 = document.getElementsByTagName("h3"); 
// console.log(malditoH3);
// malditoH3[0].style.color = "red";
// malditoH3[0].style.textAlign = 'center';

// ------------------------------ Aula 22 - Loops com For ------------------------------
// for (var a = 0; a < 5 ; a++) {
//         console.log(a);
//     }  // assim como as funções, não é preciso ponto e vírgula ao final dos loops

// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
//     for (var a = 0; a < alunos.length ; a++) {
//         console.log(alunos[a]);
//     }

// var carro = {
//         'Ano': 2018,
//         'Modelo': 'Fox',
//         'Cilindradas': '1.8',
//         'Combustível': 'Gasolina'
//     }
//     for (var prop in carro) {//Para objetos o For é diferente
//         console.log( prop + ': ' + carro[prop] );
//     }
// 	/* O console mostrará:
//     Ano: 2018
//     Modelo: Fox
//     Cilindradas: 1.8
//     Combustível: Gasolina
//     */
//
//  	Para mudar diversos elementos da pagina de uma vez com loops: 
// var elementos = document.getElementsByClassName("exemplo");   

//     for (var a = 0; a < elementos.length ; a++) {
//         elementos[a].style.color = "orange";
//         elementos[a].style['font-weight'] = "bold";
//     }

// ------------------------------ Aula 23 - Loops com While e do While ------------------------------    
// var elementos = document.getElementsByClassName("exemplo"); 
// var a = 0;
// ---Desafio do video---
// while (a < elementos.length) {
//  	elementos[a].style.color = "green";
//     elementos[a].style['font-weight'] = "bold";
//     a++;
//  } 

// ---Funcionamento básico do while e do while:
// var count = 0;
//     while (count < 5) {
//         console.log(count);
//         count++;
//     }

//     /* O console mostrará:
//     0
//     1
//     2
//     3
//     4
//     */

// var count = 10; 
//         do {//Pelomenos um vez o do while será realizado, pois ele verifica a condição após uma execução.
//             console.log(count);
//             count++;
//         } while (count < 5); // O loop do/while precisa de ponto e vírgula depois da condição
//         // O console mostrará: 10

// ------------------------------ Aula 23 - Condicionais - IF, ELSE IF, ELSE - ------------------------------ 
// var idade = 17;
//     if (idade < 18) {
//         console.log('Menor de idade');
//     } else {

//         console.log('Maior de idade');
//     }
//     // O console mostrará: 'Menor de idade'

// var idade = 18;
//     if (idade < 18) {
//         console.log('Menor de 18');
//     } else if (idade == 18) {
//         console.log('Tem 18 anos');
//     } else {
//         console.log('Maior de 18');
//     }
//     // O console mostrará: 'Tem 18 anos'

// var nota = 7;
// var faltas = 3;
//     // Resolução com and:

//     if (nota >= 7 && faltas <= 4) {
//         console.log( 'O aluno foi aprovado' );
//     } else {
//         console.log( 'O aluno foi reprovado' );
//     }

//     // Resolução com or: 

//     if (nota < 7 || faltas > 4) {
//         console.log( 'O aluno foi reprovado' );
//     } else {
//         console.log( 'O aluno foi aprovado' );
//     }

//     // as duas maneiras de resolver chegam ao mesmo resultado. O console mostrará: "O aluno foi aprovado".

//     // mude os valores das variáveis nota e faltas e veja como o teste funciona.

// var nome = "";//Caso coloque um nome aqui dentro o console retornara o nome, pois uma String não estando vazia é true. 

//     if (nome) { // O string vazio é avaliado como falso, por isso o código dentro do else é executado.// O console mostrará "Nome não informado" 
//         console.log(nome);
    
//     } else {
//         console.log("Nome não informado");

//     }
    
// 	// Este método poderia ser usado para testar se um campo de formulário está vazio, por exemplo.

// ------------------------------ Aula 24 - Aninhamento de loop e condicionais ------------------------------ 
var socio = false;
var idade = 25;
    
    if (socio == true || idade >= 65) {
        console.log('O ingresso é grátis');
    } else {

        if (idade < 18) {
            console.log('O ingresso custa: R$ 6,00');
        } else {
            console.log('O ingresso custa: R$ 12,00');
        }
    }
    // O console mostrará 'O ingresso custa: R$ 12,00'

 var funcionarios = [
        
        {
            'nome': 'Carlos Henrique da Silva',
            'idade': 45,
            'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
            
        },

        {
            'nome': 'Maria Helena Pereira',
            'idade': 32,
            'filhos': undefined
            
        },

        {
            'nome': 'José Feliciano Maia',
            'idade': 39,
            'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
            
        }
    
    ];
        
    var list_element = document.getElementById("filhos");

    for (var a = 0 ; a < funcionarios.length ; a++) {
        if (funcionarios[a].filhos) {//No caso da funcionaria maria, ele não tem um array de filhos e isso ocasionara um erro, mas com if, 
        								// tudo que não é null,undifined e String vazia retorna false, então eles nem entrariam no segundo for.
            var lista_filhos = funcionarios[a].filhos;
            
            for (var b = 0 ; b < lista_filhos.length ; b++) {
                list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';

            }
        }
    }    
