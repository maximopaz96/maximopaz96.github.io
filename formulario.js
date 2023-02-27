var ventana_secundaria
function mostrar(){
  ventana_secundaria = window.open("formulario.html","miventana","width=600,height=500")
  }
function cerrarventana(){
 window.close("formulario.html")
 alert("Enviado con exito!")
    }
   
var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup',function(){
       if (this.value.length>=1){ 
         this.nextElementSibling.classList.add('fijar');
         
       }else{
        this.nextElementSibling.classList.remove('fijar');
       }
    });
}
