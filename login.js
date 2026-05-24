// Função login
function login(){

    // Pega email
    const email =
    document.getElementById("email").value;

    // Pega senha
    const senha =
    document.getElementById("senha").value;

    // Busca usuários
    const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    // Procura usuário
    const usuario =
    usuarios.find(

        u=>
        u.email===email &&
        u.senha===senha

    );

    // Se achou
    if(usuario){

        // Login sucesso
        alert("Bem-vindo "+usuario.nome);

    }else{

        // Erro
        alert("Login inválido");
    }
}