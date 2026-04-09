const usuarios = [
    { login: "paolla", senha: "paloma123" },
    { login: "rafaela", senha: "rafinha1510" },
    { login: "elisa", senha: "elisinha123" },
    { login: "rafael", senha: "breco123" },
    { login: "isabella", senha: "radar16" },
    { login: "zanetti", senha: "olimpico123" },
    { login: "raul", senha: "rao1655" },
    { login: "felipe", senha: "oitudobomne" },
    { login: "nicolas", senha: "figmaboy" },
    { login: "fabio", senha: "snorlax14" }
];

let tentativinha = 3;
let acesso = false;

function tentarLogin() {


    let loginD = document.getElementById("login").value;
    let senhaD = document.getElementById("senha").value;

    let usuarioE = usuarios.find(
        u => u.login === loginD && u.senha === senhaD
    );

    do {

        let msg = document.getElementById("mesg");

        if (usuarioE) {
            acesso = true;

            // esconder login
            document.getElementById("escodidin").style.display = "none";

            // mostrar sucesso
            document.getElementById("acessook").style.display = "block";
            document.getElementById("acessouse").textContent =
                "Usuário: " + usuarioE.login;

            msg.style.display = "none";

        } else {
            tentativinha--;

            msg.style.display = "block";

            if (tentativinha > 0) {
                msg.textContent =
                    " Login inválido — tentativas restantes: " + tentativinha;
            } else {
               
                document.getElementById("escodidin").style.display = "none";
                document.getElementById("acessobloq").style.display = "block";
                msg.style.display = "none";
            }
        }

        break; 

    } while (!acesso && tentativinha > 0);
}

function resetar() {
    tentativinha = 3;
    acesso = false;

   
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";

    let msg = document.getElementById("mesg");
    msg.style.display = "none";
    msg.textContent = "";

    document.getElementById("escodidin").style.display = "block";

   
    document.getElementById("acessook").style.display = "none";
    document.getElementById("acessobloq").style.display = "none";
}