var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function() {

    var pacientes = document.querySelectorAll(".paciente");
  
    if(this.value.length > 0) {
        pacientes.forEach(element => {
            var paciente = element;
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            }else {
                paciente.classList.remove("invisivel");
            }
    
        });
    } else {
        for (var index = 0; index < pacientes.length; index++) {
            var aux = pacientes[index];
            aux.classList.remove("invisivel");
            
        }
    }
});