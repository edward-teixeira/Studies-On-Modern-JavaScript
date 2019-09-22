

var button = document.querySelector("#buscar-pacientes");

button.addEventListener("click", function () {

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }

    });
    xhr.send();
});



function fibo() {

var fib = [];
fib[1] = 1;
fib[2]= 1

 // i = 3 | fibo[i] = 1+1 | fib[3] = 2
 // i = 4 | fibo[i] = 2 + 1 | fib[4] = 3
 // i = 5 | fibo[i] = 3 + 2 | fib[5] = 5
 // i = 6 | fibo[i] = 5 + 3 | fib[6] = 8

for(let i = 3; i < 20; i++) {
    fib[i] = fib[i-1] + fib[i-2];
    console.log(fib[i]);
}
}

