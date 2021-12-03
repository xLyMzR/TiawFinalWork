onload = ()=>{

    const botaoAlterarPerfil = document.getElementById('atualizarPerfil');
    const nomeUsuario = document.getElementById('nomeCompleto');
    const cepUsuario = document.getElementById('cep');
    const cellUsuario = document.getElementById('celular');
    const senhaUsuario = document.getElementById('senha');
    const cpfUsuario= document.getElementById('cpf');
    const emailUsuario = document.getElementById('email');
    var dataUserLogged = JSON.parse(localStorage.getItem("userLogged"));
    const emailSideBar = document.getElementById('emailLogado');

    nomeUsuario.placeholder = `${dataUserLogged[0].nomeUsuario}`;
    cepUsuario.placeholder = `${dataUserLogged[0].cepUsuario}`;
    cellUsuario.placeholder = `${dataUserLogged[0].telefoneUsuario}`;
    senhaUsuario.placeholder = `**********`;
    document.getElementById('confirmSenha').placeholder = '**********';
    cpfUsuario.placeholder =`${dataUserLogged[0].cepUsuario}`;
    emailUsuario.placeholder =`${dataUserLogged[0].emailLogin}`;
    emailSideBar.innerHTML =`${dataUserLogged[0].emailLogin}`;

}