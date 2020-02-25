//Ex 1
document.getElementById("converter").onclick = function(){
	var conversao = (9 * (document.getElementById("temp_celsius").value) / 5) + 32;
	document.getElementById("temp_fahr").innerHTML = conversao;
}

//Ex 2
var AnoCopa = document.getElementById("anos_copa");
document.getElementById("anos_copa").innerHTML = "";
var a = 1930;

for(var i = 1930; i <= 2018 ; i += 4){
	AnoCopa.innerHTML +="<li>" + i + "</li>";
}

//Ex 3
var nota1, nota2, falta, resultado;

document.getElementById("calcular").onclick = function(){
	nota1 = parseFloat(document.getElementById("nota1").value);
	nota2 = parseFloat(document.getElementById("nota2").value);
	falta = parseFloat(document.getElementById("n_faltas").value);
	media = (nota1 + nota2)/2;
	console.log(media)

if (falta <= 14) {
	if (media <= 6.5) {
		resultado = ("Reprovado por media!");
	} else {
		resultado = ("Aprovado!")
		}
	}
else{
    if (media <= 6.5) {
		resultado = ("Reprovado por media e falta!");
    }
    else{
	resultado = ("Reprovado por falta");
    }
}
	document.getElementById("result").innerHTML = resultado;
}

//Ex 4
    var vendas_cursos = [
        {
            'aluno': 'Emmanuel Gomes',
            'data': '10/06/2018',
            'valor': 34.99,
            'reembolso': null     
        },
        {
            'aluno': 'Carla Dias',
            'data': '10/06/2018',
            'valor': 29.99,
            'reembolso': null          
        },
        {
            'aluno': 'Rafael Marques',
            'data': '11/06/2018',
            'valor': 39.99,
            'reembolso': '13/06/2018'          
        },
        {
            'aluno': 'Maria Isabel Pereira',
            'data': '11/06/2018',
            'valor': 29.99,
            'reembolso': null            
        },
        {
            'aluno': 'Andre Luis Silva',
            'data': '12/06/2018',
            'valor': 34.99,
            'reembolso': null       
        }
    
    ];

var tabela = document.getElementById("vendas_cursos");
    tabela.innerHTML = " ";
var tot_valor = 0;

    for (var a = 0 ; a < vendas_cursos.length ; a++) {
        if (!vendas_cursos[a].reembolso) {
                tabela.innerHTML += '<tr>' + 
                                    '<td>' + vendas_cursos[a].aluno + '</td>'+
                                    '<td>' + vendas_cursos[a].data + '</td>' + 
                                    '<td>' + vendas_cursos[a].valor + '</td>'+
                                  '</tr>';  
                tot_valor += vendas_cursos[a].valor;
            }
        }

document.getElementById("total_vendas").innerHTML = tot_valor;
    
