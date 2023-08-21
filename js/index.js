const dato = document.getElementById('inputText');
const boton = document.getElementById('buttonText'); 

boton.addEventListener('click', function(){
    localStorage.setItem('datoGuardado', dato.value)
    
}) 