// Função cadastrar
function cadastrar(){

    // Pega nome digitado
    const nome =
    document.getElementById("nome").value;

    // Pega email
    const email =
    document.getElementById("email").value;

    // Pega senha
    const senha =
    document.getElementById("senha").value;

    // Busca usuários salvos
    const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    // Procura email existente
    const existe =
    usuarios.find(u=>u.email===email);

    // Se existir
    if(existe){

        // Mostra erro
        alert("Email já existe");

        // Para execução
        return;
    }

    // Adiciona usuário
    usuarios.push({

        nome:nome,

        email:email,

        senha:senha

    });

    // Salva local
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    // Mensagem sucesso
    alert("Cadastro realizado");

    // Vai login
    window.location.href="index.html";
}