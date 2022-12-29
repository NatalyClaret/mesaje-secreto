function encriptar()
{	
	var frase = document.getElementById('textoMensaje').value; 
	frase = frase.toLowerCase();
	//
	var textoEncriptado = frase;	
	textoEncriptado     = textoEncriptado.replaceAll("e","enter");
	textoEncriptado     = textoEncriptado.replaceAll("i","imes");
	textoEncriptado     = textoEncriptado.replaceAll("o","ober");
	textoEncriptado     = textoEncriptado.replaceAll("u","ufat");
	textoEncriptado     = textoEncriptado.replaceAll("a","ai");
	
	document.getElementById('textoResultado').innerHTML=textoEncriptado;
}


  function desencriptar()
  {
      var frase = document.getElementById('textoMensaje').value;
      frase = frase.toLowerCase();
      //
      var textoDesencriptado = frase;
      textoDesencriptado = textoDesencriptado.replaceAll("enter","e");
      textoDesencriptado = textoDesencriptado.replaceAll("imes","i");
      textoDesencriptado = textoDesencriptado.replaceAll("ai","a");
      textoDesencriptado = textoDesencriptado.replaceAll("ober","o");
      textoDesencriptado = textoDesencriptado.replaceAll("ufat","u");
      //alert(textoDesencriptado);
      
      document.getElementById('textoResultado').innerHTML=textoDesencriptado;
      
    }

   
function copiar() {
   
        var contenido = document.querySelector("#textoResultado");
        contenido.select();
        
        document.execCommand("Copy");
    }      
  