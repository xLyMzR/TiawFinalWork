onload = ()=>{

  

      const campos = document.getElementById('campos');
      let userLogged = JSON.parse(localStorage.getItem("userLogged"));

      campos.innerHTML= `<div class="p-3 py-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
          <h4 class="text-right">Configurações de Perfil</h4>
      </div>
      <div class="row mt-2">
          <div class="col-md-12"><label class="labels">Nome</label><input id="nomeCompleto" type="text" class="form-control" placeholder="" value="${userLogged[0].nomeUsuario}"></div>
          <div class="col-md-12"><label class="labels">Email</label><input  id="email" type="text" class="form-control" placeholder="enter email id" value="${userLogged[0].emailLogin}"></div>
          <div class="col-md-12"><label class="labels">Cpf</label><input type="text" id="cpf" class="form-control" placeholder="" value="${userLogged[0].cpfUsuario}"></div>
          <div class="col-md-12"><label class="labels">Celular</label><input  id="celular" type="number" class="form-control" placeholder="enter phone number" value="${userLogged[0].telefoneUsuario}"></div>
      </div>
      <div class="row mt-3">
          
          <div class="col-md-12"><label class="labels">Cep</label><input id="cep" type="number" class="form-control" placeholder="enter address line 2" value="${userLogged[0].cepUsuario}"></div>

          
      </div>
      <div class="row mt-3">
          <div class="col-md-6"><label class="labels">Senha</label><input id="senha" type="password" class="form-control" placeholder="senha" value="">
          <span id="aviso"></span>
          </div>
          <div class="col-md-6"><label class="labels">Confirme sua senha</label><input id="confirmSenha" type="password" class="form-control">
          <span id="avisoConfirm"></span>
          </div>
      </div>
      <div class="mt-5 text-center"><button id="atualizarPerfil" class="btn btn-primary profile-button" type="button">Atualizar</button></div>
  </div>`;


  const botaoAlterarPerfil = document.getElementById('atualizarPerfil');
  
  
//aviso de senha com 8 caracters
  document.getElementById('senha').onblur = () => {

    if(document.getElementById('senha').value.length <8 ){

      document.getElementById('aviso').innerHTML = "senha deve conter no míninmo 8 caracteres";
      document.getElementById('aviso').style.fontSize = "0.7em";
      document.getElementById('aviso').style.color = "orange";
      document.getElementById('aviso').style.fontWeight = "bolder";
    }

  }

  document.getElementById('confirmSenha').onblur = ()=> {

    if(document.getElementById('senha').value != document.getElementById('confirmSenha').value){

    document.getElementById('avisoConfirm').innerHTML = "as senhas devem ser iguais";
    document.getElementById('avisoConfirm').style.fontSize = "0.7em";
    document.getElementById('avisoConfirm').style.color = "orange";
    document.getElementById('avisoConfirm').style.fontWeight = "bolder";
    }
    else{
      document.getElementById('avisoConfirm').innerHTML='';
    }

  }



//CONDIÇÕES PARA ALTERAÇÃO DE PERFIL
    botaoAlterarPerfil.onclick = () =>{

     

     if(document.getElementById('senha').value == '' || document.getElementById('nomeCompleto').value == '' || document.getElementById('email').value=='' || document.getElementById('cpf').value == '' || document.getElementById('cep').value == '' || document.getElementById('celular').value == '' || document.getElementById('senha').value.length < 8 || document.getElementById('confirmSenha').value != document.getElementById('senha').value){
        
      alert(" Por gentileza verifique se todos os campos estão preenchidos!");

      return false;
      
     }


     //criando o objeto cadastroUsuario para usar na página de login  
     
          let cadastroDoUsuario = [{
          "nomeUsuario": document.getElementById('nomeCompleto').value,
          "emailLogin": document.getElementById('email').value,
          "senha": document.getElementById('senha').value,
          "cpfUsuario":  document.getElementById('cpf').value,
          "cepUsuario": document.getElementById('cep').value,
          "telefoneUsuario": document.getElementById('celular').value
        }
        ]

        localStorage.setItem("userLogged", JSON.stringify(cadastroDoUsuario));
        localStorage.setItem("nameLogged", cadastroDoUsuario[0].nomeUsuario)
        localStorage.setItem(cadastroDoUsuario[0].emailLogin, JSON.stringify(cadastroDoUsuario));
      
      
      alert("ALTERAÇÃO REALIZADA COM SUCESSO");
       
    
     
     //fim do onclick
       }

}