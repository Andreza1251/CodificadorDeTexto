//essa variaável pega o valor digitado no textarea
let input = document.querySelector("#texto_digitado");
//variável que será usada no botão de encriptar
let botaoEncriptar = document.querySelector("#botao_criptografar");
//variável que será utilizada no botão de descriptar
let botaoDecriptar = document.querySelector("#botao_descriptografar");
//variavel do texto que criptografado
let textoCriptografado = document.querySelector("#inputForm");
//variável do botão copiar
let botaoCopiar = document.querySelector("#botao_de_copiar");


//função que vai auxiliar a criptografar e descriptografar
// esse /e/g é para utilizar as expressões regulares 
function encriptaMensagem(palavra) {
  return palavra
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decriptaMensagem(palavraCriptografada) {
  return palavraCriptografada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function mostarMensagem(texto){
  textoCriptografado.style.display = "block";
  textoCriptografado.textContent = texto;


  document.getElementById("sem_mensagem").style.display = "none";
  document.getElementById("texto_vazio").style.display = "none";
  document.getElementById("lupa").style.display = "none";
}

function mostarInformacao(){
  document.getElementById("sem_mensagem").style.display = "block";
  document.getElementById("texto_vazio").style.display = "block";
  document.getElementById("lupa").style.display = "block";

 textoCriptografado.style.display = "none";

}

// função para encriptografar palavras
function encripta() {
  let texto = input.value.trim();

  if (texto !== "") {
    if (/^[a-z ]+$/.test(texto)) {
      let textoEncriptado = texto.split(" ").map(encriptaMensagem).join(" ");
      mostarMensagem(textoEncriptado);
    } else {
      alert("Por favor, digite apenas letras minusculas, sem acento e sem ç.");
    }
  } else {
    alert("Nenhum texto digitado para criptografar");
  }
}


function descripta() {
  let texto = textoCriptografado.textContent.trim();

  if (texto !== "") {
    if (/^[a-z ]+$/.test(texto)) {
      let textoDescriptado = texto.split(" ").map(decriptaMensagem).join(" ");
      mostarMensagem(textoDescriptado);
    } else {
      alert("Texto descriptografado inválido. Certifique-se de usar apenas letras minúsculas e os caracteres especiais utilizados na criptografia.");
    }
  } else {
    alert("Nenhum texto criptografado para descriptografar");
  }
}

botaoEncriptar.addEventListener("click", encripta);
botaoDecriptar.addEventListener("click", descripta);




function copiarTexto(){
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textoCriptografado.textContent;
    
    document.body.appendChild(tempTextArea);
 

    navigator.clipboard.writeText(textoCriptografado.value).then(() =>{
        alert("Copiado para área de transferência")
    })
}

botaoCopiar.addEventListener("click", copiarTexto);