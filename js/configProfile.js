onload = ()=>{

    const botaoAlterar= document.getElementById('atualizarPerfil');
    const nomeUsuario= document.getElementById('Nome');
    const emailUsuario= document.getElementById('email');
    const cepUsuario= document.getElementById('endereco');
    const cellUsuario= document.getElementById('celular');
    const senhaUsuario = document.getElementById('senha');
    
    const dataUserLogin = JSON.parse(localStorage.getItem("userLogged"));


    console.log(dataUserLogin[0].nomeUsuario);

    nomeUsuario.placeholder = `teste`;

}