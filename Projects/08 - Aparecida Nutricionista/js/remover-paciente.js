var pacientes = document.querySelector(".paciente");
    
    pacientes.addEventListener("dblclick", function(event){
            event.target.parentNode.classList.add("fadeout");
            
            setTimeout(function() {
                event.target.parentNode.remove();
            }, 500);
    });