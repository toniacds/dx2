function operador1(){

 var nomeMnota = '';
var maiornota = -1;
var contador = 0;
const numalunos = parseInt(prompt('Quantos alunos?'));
const texto = document.querySelector("h1");

 while (contador < numalunos) {
 const entrada = prompt(`Nome do aluno ${contador + 1}`);
 var entrada2 = prompt(`Nota do aluno ${contador + 1}`);
entrada2 = parseInt(entrada2);
 
if (entrada2 > maiornota) {
maiornota = entrada2;
 nomeMnota = entrada;
} else {}
contador++;
 }
 texto.innerHTML = "O aluno com a maior nota é:" + nomeMnota;
  }

  function operador(){
    var qdtmusicas= prompt("Quantidade de músicas") ;
    var maistocada = 0;
    var qdtstream = 0;
    const texto = document.querySelector ("h1");
    

    while (qdtmusicas > 0) {
    qdtstream = prompt ("Quantidade de stream de cada música") ;
    
    
        if (qdtstream >= maistocada) {
            maistocada = qdtstream;
        }
    
        qdtmusicas--;
    }
    
    texto.innerHTML="O maior stream foi de: " + maistocada;
    
    }