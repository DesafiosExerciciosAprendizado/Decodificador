document.getElementById("com_texto").style.display = "none";
//document.getElementById("sem_texto").style.display = "none";

function aparece_resultado()
{
  document.getElementById("sem_texto").style.display = "none";
  document.getElementById("com_texto").style.display = "flex";
}

function desaparece_resultado()
{
  document.getElementById("sem_texto").style.display = "flex";
  document.getElementById("com_texto").style.display = "none";
}

function criptografa()
{
  aparece_resultado();
  const entrada = document.getElementById("entrada");
  const saida = document.getElementById("saida"); 
  let arr = entrada.value.split("");

  // a -> ai, e -> enter, i -> imes, o -> ober, u -> ufat.
  for(let i = 0; i < arr.length; i++)
   {
     if(arr[i] == "a") arr.splice(++i, 0, "i");
     else if(arr[i] == "e") arr.splice(++i, 0, "nter");
     else if(arr[i] == "i") arr.splice(++i, 0, "mes");
     else if(arr[i] == "o") arr.splice(++i, 0, "ber");
     else if(arr[i] == "u") arr.splice(++i, 0, "fat");
   }
  saida.value = arr.join("");
  entrada.value = "";
  botao.innerText = "Copiar texto"
}

function descriptografa()
{
  aparece_resultado();
  const entrada = document.getElementById("entrada");
  const saida = document.getElementById("saida"); 
  let arr = entrada.value.split("");
  // ai -> a, enter -> e, imes -> i, ober -> o, ufat -> u.
  for(let i = 0; i < arr.length; i++)
   {
     if(arr[i] == "a") arr.splice(++i, 1, "");
     else if(arr[i] == "e") arr.splice(++i, 4, "");
     else if(arr[i] == "i") arr.splice(++i, 3, "");
     else if(arr[i] == "o") arr.splice(++i, 3, "");
     else if(arr[i] == "u") arr.splice(++i, 3, "");
   }
  saida.value = arr.join("");
  entrada.value = "";
  botao.innerText = "Copiar texto"
}

function copiar()
{
  const saida = document.getElementById("saida"); 
  navigator.clipboard.writeText(saida.value);
  desaparece_resultado();
}

function selecionar(id)
{
  const texto = document.getElementById(id);
  texto.select();
}

function muda_texto_bt_copiar()
{
  const botao = document.getElementById("bt_copiar");
  if(botao.innerText == "Copiar texto") botao.innerText = "Copiado!";
  else botao.innerText = "Copiar texto"
}