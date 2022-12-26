function encriptar() {
  const texto = document.getElementById("textoCifrado").value.toLowerCase();

  let textoEncriptado = texto.replace(/[eéèëê]/img, "enter");
   textoEncriptado = textoEncriptado.replace(/[iíìïî]/img, "imes");
   textoEncriptado = textoEncriptado.replace(/[aáàäâ]/img, "ai");
   textoEncriptado = textoEncriptado.replace(/[oóòöô]/img, "ober");
   textoEncriptado = textoEncriptado.replace(/[uúùüû]/img, "ufat");
  
   textoEncriptado = textoEncriptado.replace(/[ñ]/, "n");
   textoEncriptado = textoEncriptado.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/img,'');
   textoEncriptado = textoEncriptado.replace(/[^[a-z\s]+$]/img,'');
   

  document.getElementById("textoDescifrado").innerHTML = textoEncriptado;

  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "flex";
  document.getElementById("textoDescifrado").style.display = "show";
  document.getElementById("textoDescifrado").style.display = "flex";
  document.getElementById("titulo").style.display = "none";

}

function desencriptar() {
  const frase = document.getElementById("textoCifrado").value.toLowerCase();

  let textoDesencriptado = frase.replace(/enter/img, "e");
  textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
  textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
  textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
  textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
  document.getElementById("textoDescifrado").innerHTML = textoDesencriptado;

}

function copiar() {
  const contenido = document.querySelector("#textoDescifrado")
  contenido.select()
  document.execCommand("copy")
}