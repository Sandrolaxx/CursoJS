//Ex 1:
var num1 = parseFloat(document.getElementById("num_1").innerHTML);
var num2 = parseFloat(document.getElementById("num_2").innerHTML);

document.getElementById("resultado").innerHTML ="<strong>"+ (num1 + num2) +" </strong>";

//Ex 2:
var valorC = parseFloat(document.getElementById("caixa_azul").innerHTML);

function conversor(){
	var conversao = (9 * valorC / 5) + 32;
	return conversao;
}
document.getElementById("caixa_amarela").innerHTML = conversor();

//Ex 3:
var grupos = [ 
        [ "João" , "Maria" ],
        [ "Pedro" , "Joana", "André", "Júlio" ],
        [ "Carolina" , "Helena", "Marcelo" ]
    ];

var grupo_novo = grupos.slice(-2,);  
grupo_novo.unshift(["Mariana", "Felipe", "Carla"]);

console.log(grupo_novo);

//Ex 4:
var curso = {
        'titulo': "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
        "tot_aval" : function(){
        	var tot = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        	return tot; 
        },
        "media_aval" : function(){
        	var media = (((5*this.n_aval_5_estrelas)+(4*this.n_aval_4_estrelas)+(3*this.n_aval_3_estrelas)+(2*this.n_aval_2_estrelas)+(1*this.n_aval_1_estrela)) / this.tot_aval());
        	return media;
        }
    }

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];
document.getElementById("total_aval").innerHTML = curso.tot_aval();
document.getElementById("media_aval").innerHTML = curso.media_aval().toFixed(2);

//Ex 5:
var cadastro = {
	"nome" : "Sandrolax",
	"sobrenome" : "Remax",
	"email" : "sandro@hotmail.com"
};

function tabela(Object){
	return  '<div class="tableBox">' + 
    	"<table>" +
            "<tr>"+
                "<th>" + "Nome Completo" + "</th>" +
                "<th>" + " Email" + "</th>" +
            "</tr>" +
            "<tr>" +
                "<td>" + Object.nome +" " + Object.sobrenome + "</td>" +
                "<td>" + Object.email + "</td>" +
            "</tr>" +           
        "</table>" +        
    "</div>";
}

document.getElementById("tabela").innerHTML = tabela(cadastro);

