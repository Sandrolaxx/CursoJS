// ------------------------------ Aula 3 - Váriaveis ------------------------------
// var latitude = 40.87663;
// var longitude = -8.08373;
// console.log(latitude);
// console.log(longitude);


// ------------------------------ Aula 4 - Tipos de dados primitivos - Strings ------------------------------
// var nome = "Sandrolax";  // podem ser usadas aspas duplas
//    var sobrenome = 'Lindo';  // ou aspas simples
//    var cpf = '111.111.111-11';  
//    var telefone = "998887655";
//    var ddd = '21';
//    var email = 'joao@gmail.com';
//    var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

//    console.log("Nome completo: " + nome + " " + sobrenome);
//    console.log("(" + ddd + ")" + telefone);
//    console.log("Primeira letra do nome: " + nome[0]);


// ------------------------------ Aula 5 - Tipos de dados primitivos Numbers ------------------------------
// var ano_nascimento = 1986;
// var preco = 16.99;  // floats devem ser usadas com ponto, nunca com vírgula.
// var temperatura = -5;
// var numero_grande = 2.2e45; //números muito grandes podem ser representados em Javascript pela notação exponencial.

// var potencia = Math.pow(2,4); Neste caso usamos o método pow do objeto Math, que faz potenciação.
// Este método requer duas informações separadas por vírgula entre parênteses: o número base, e a potência.
// Isso significa que temos 4 a 2(quatro a segunda potencia), que dá 16.

// var arredonda = Math.round(2.7); // Arredondamento. Resultado: 3
// var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima. Resultado: 5
// var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo. Resultado: 4
// var raiz = Math.sqrt(36) // Raiz quadrada. Resultado: 6

// var increment = 20;
// increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
// console.log(increment); // O console mostrará 25
// // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=
// increment = 1;
// increment += 5;
// console.log(increment); // O console mostrará 6
// // podemos também usar *=, /= e -= para multiplicação, divisão e subtração

// increment = 10;
// increment++;
// console.log(increment); // O console mostrará 11
// increment = 20;
// increment--;
// console.log(increment); // O console mostrará 19
// var nome = "João";
// nome += " ";
// nome += "Gomes";
// console.log(nome); // O console mostrará "João Gomes"

// var ddd = 21;
// var telefone = 998887655;

//  Se quisermos montar o telefone completo usando concatenação, podemos ter problemas já que as variáveis são do tipo número. 
// Neste caso devemos convertê-las antes de montar o telefone. 
// Para isso, usamos o método toString, que recebe entre parênteses a valor ou variável que queremos converter.

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();
// var telefone_completo = ddd_string + tel_string;
// console.log(telefone_completo); // retorna '21998887655'
// var idade = '17';
// var idade_num = parseInt(idade);
// idade_num++;
// console.log(idade_num); // O console mostrará 18


// ------------------------------ Aula 6 - Tipos de dados primitivos Boolean ------------------------------
// var teste1 = 20 > 2; // true
// var teste2 = 2 >= 2; // true
// var teste3 = 5 < 5; // false
// var teste4 = 5 <= 10; // true
// var teste5 = 20 == 20; // true
// var teste6 = 'ivan' == 'joão' // false
// var teste7 = 20 === "20"; // false - valor é igual mas o tipo não. O primeiro é número, o segundo é string.
// var teste8 = 20 != 10; // true
// var teste9 = 10 != 10; // false
// var teste10 = "10" !== 10; // true - o tipo não é igual
// var teste11 = "9" !== 10; // false - o tipo nem o valor são iguais.

// /* Atenção: tome cuidado com comparações de maior e menor com tipos diferentes, por exemplo, números com strings,
// pois este tipo de operação gera resultados inesperados.  */

// var v_string = "teste";
// var v_numero = 4.55;
// var idade = 21;
// var v_boolean = idade > 18 ;

// console.log(typeof v_string);  // retorna string
// console.log(typeof v_numero);  // retorna number
// console.log(typeof v_boolean);  // retorna boolean