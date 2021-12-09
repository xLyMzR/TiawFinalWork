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
    const confirmSenha = document.getElementById('confirmSenhar');

    nomeUsuario.placeholder = `${dataUserLogged[0].nomeUsuario}`;
    cepUsuario.placeholder = `${dataUserLogged[0].cepUsuario}`;
    cellUsuario.placeholder = `${dataUserLogged[0].telefoneUsuario}`;
    senhaUsuario.placeholder = `**********`;
    document.getElementById('confirmSenha').placeholder = '**********';
    cpfUsuario.placeholder =`${dataUserLogged[0].cepUsuario}`;
    emailUsuario.placeholder =`${dataUserLogged[0].emailLogin}`;
    emailSideBar.innerHTML =`${dataUserLogged[0].emailLogin}`;


//CONDIÇÕES PARA ALTERAÇÃO DE PERFIL
    botaoAlterarPerfil.onclick = () =>{

  
        if(cepUsuario.value.length< 8 || nomeUsuario.value=='' || emailUsuario.value =='' || cpfUsuario.value=='' || cepUsuario.value == '' || cellUsuario.value =='' || senhaUsuario.value == '' || confirmSenha.value == '' || senhaUsuario.value !== confirmSenha.value){
           alert('Verifique os campos do formulário ');
           return false;
         }
         
       if(senhaUsuario.value.length< 8 || cpfUsuario.value.length <11 || cpfUsuario.value.length >11 || cepUsuario.value.length >8 || cellUsuario.value.length >12){
           alert('Verifique os campos do formulário');
     
          return false;
        }
     
     //criando o objeto cadastroUsuario para usar na página de login
     
        let cadastroDoUsuario = [{
         "nomeUsuario": document.getElementById('nome').value,
         "emailLogin": document.getElementById('emailCadastro').value,
         "senha": document.getElementById('senhaCadastro').value,
         "cpfUsuario": document.getElementById('cpf').value,
         "cepUsuario": document.getElementById('cep').value,
         "telefoneUsuario": document.getElementById('celular').value
       }
       ]
       
       localStorage.setItem(emailUsuario.value, JSON.stringify(cadastroDoUsuario));
     
     
     alert("ALTERAÇÃO REALIZADA COM SUCESSO");
       
     window.location.href = "./configProfileUser.html"; 
     
     //fim do onclick
       }

}