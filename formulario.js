<script type="text/javascript">
function validarEntero(valor){
   //intento convertir a entero.
   //si era un entero no le afecta, si no lo era lo intenta convertir
   valor = parseInt(valor)

   //Compruebo si es un valor numérico
   if (isNaN(valor)) {
      //entonces (no es numero) devuelvo el valor cadena vacia
      return ""
   }else{
      //En caso contrario (Si era un número) devuelvo el valor
      return valor
   }
}

function validarform(){
   //valido el nombre
   if (document.formulario1.nombre.value.length==0){
      alert("Tiene que escribir su nombre")
      document.formulario1.nombre.focus()
      return 0;
   }

   //valido la edad. tiene que ser entero mayor que 18
   edad = document.formulario1.edad.value
   edad = validarEntero(edad)
   document.formulario1.edad.value=edad
   if (edad==""){
      alert("Tiene que introducir un número entero en su edad.")
      document.formulario1.edad.focus()
      return 0;
   }else{
      if (edad<18){
         alert("Debe ser mayor de 18 años.")
         document.formulario1.edad.focus()
         return 0;
      }
   }

   //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.formulario1.submit();
}

</script>

