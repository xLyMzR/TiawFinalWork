onload = () =>{

//desabilitando o botão de envio do formulário
//document.getElementById('btn').disabled = true;

//bloqueando a opçao de "PASTE" nos inputs para evitar falha nas verificaçoes!!!
var description = document.querySelectorAll(".form-control");
description.forEach((inputs) =>{

  inputs.addEventListener("paste", function(e) {
    
    e.preventDefault();
      
  });

});


//VERIFICAÇÃO EM TEMPO REAL

//tratamento campo NOME
nome.oninput = () => {
//qualquer minima alteração no campo textual ele já responde (oninput)

 //Transforma toda a entrada de letras para minuscula
  nome.value = nome.value.toLowerCase();

 //verificando a utilização de caracters nos campos textuais

   if ('!@#$%ˆ&*()/+:.]ªº°[],;^~`´`|¹²³££¢¬¬¬¬"{}?*_=-¨'.indexOf(nome.value.charAt(nome.value.length - 1)) >= 0) 
   {
     //substr método de remoção de elementos de uma string. Se tiver algum caracter ele vai remover do valor
     nome.value = nome.value.substr(0, nome.value.length - 1);
   }

   if ('0123456789'.indexOf(nome.value.charAt(nome.value.length - 1)) >= 0) 
   {
     //substr método de remoção de elementos de uma string. Se tiver algum caracter ele vai remover do valor
     nome.value = nome.value.substr(0, nome.value.length - 1);
   }
 
  }

//tratamento campo CPF
  cpf.oninput = () =>{

    cpf.value = cpf.value.toLowerCase();
    
    if('|!@#$%ˆ&*`´()+~ªº°[]^:.,|"¹²³££¢¬¬¬¬{}?/^~*_=-;¨abcdefghijklmnopçqrswtuvxyz'.indexOf(cpf.value.charAt(cpf.value.length - 1)) >=0 ){
    
      cpf.value = cpf.value.substr(0, cpf.value.length - 1);
    }
    
 


  }
  cpf.onchange = () =>{
    
    let campo = document.getElementById('campoCPF');

    if(cpf.value.length < 11 || cpf.value.length > 11){


     campo.innerHTML ='* CPF invalido!';
      campo.style.color='orange';
      
      cpf.focus();
    }

    else{
       campo.innerHTML ='';
    }
  }
//tratamento campo CEP
  cep.oninput = () =>{

    cep.value = cep.value.toLowerCase();
    
    if('|!@#$%ˆ&*`ªº´()+~°[]^:.,¹²³££¢¬¬¬¬|"{}?/^~*_=-;¨abcdefçghijklmnopqrswtuvxyz'.indexOf(cep.value.charAt(cep.value.length - 1)) >=0 ){
    
      cep.value = cep.value.substr(0, cep.value.length - 1);
    }
    


  }
  cep.onchange = () =>{
    let spanCep = document.getElementById('campoCep'); 

    if(cep.value.length < 8 || cep.value.length>8){
      spanCep.innerHTML = "*cep invalido";
      spanCep.style.color='orange';
      cep.focus();
    }
    else{
      
      spanCep.innerHTML = '';
    }

  }
//tratamento campo CELL
  celular.oninput = () =>{

    celular.value = celular.value.toLowerCase();
    
    if('|!@`´#$%ˆ&*()ªº°+~[]^:.,¹²³££¢¬¬¬¬|"{}?/^~*_=-;¨abcdefwgçhijklmnopqrstuvxyz'.indexOf(celular.value.charAt(celular.value.length - 1)) >=0 ){
    
      celular.value = celular.value.substr(0, celular.value.length - 1);
    }
    


  }
  celular.onchange = () =>{
    let spanCell = document.getElementById('campoCell'); 

    if(celular.value.length < 12 || celular.value.length>12){
  
      spanCell.innerHTML = "*celular invalido";
      spanCell.style.color='orange';
      cep.focus();
    }
    else{
      
      spanCell.innerHTML = '';
    }
  }
  
//TRATAMENTO CAMPO SENHA
senhaCadastro.onchange = ()=>{
  if(senhaCadastro.value.length <8){
   
    let spanSenha = document.getElementById('caractersSenha')
    spanSenha.innerHTML = '* Senha deve conter no mínimo 8 caracteres';
    spanSenha.style.color = 'orange';
    spanSenha.style.display = 'block';
  }
  else{
    let spanSenha = document.getElementById('caractersSenha');
    spanSenha.innerHTML = '';
  }

//verificação de semelhança de senhas
  if(senhaRepeat.value == senhaCadastro.value){
      
    let spanSenhaRepeat = document.getElementById('senhasIguais');
    spanSenhaRepeat.innerHTML = '';
  }

  else{
   
    
    let spanSenhaRepeat = document.getElementById('senhasIguais');
    spanSenhaRepeat.innerHTML = '* As senhas devem ser iguais';
    spanSenhaRepeat.style.color = 'orange';
    spanSenhaRepeat.style.display = 'block';

    
  }

}

  senhaRepeat.onchange = () =>{

    if(senhaRepeat.value == senhaCadastro.value){
      
      let spanSenhaRepeat = document.getElementById('senhasIguais');
      spanSenhaRepeat.innerHTML = '';
    }

    else{
     
      
      let spanSenhaRepeat = document.getElementById('senhasIguais');
      spanSenhaRepeat.innerHTML = '* As senhas devem ser iguais';
      spanSenhaRepeat.style.color = 'orange';
      spanSenhaRepeat.style.display = 'block';
  
      
    }

  }


  //CHECKBOX para controles de envio
  concordaComTermos.onchange = ()=>{

    if(concordaComTermos.checked == true){
      document.getElementById('btn').disabled = false;
    }
    else{
      document.getElementById('btn').disabled = true;
    }
  }

 //verificação de envio 
  butCad.onclick = () =>{

  
   if(cep.value.length< 8 || nome.value=='' || emailCadastro.value =='' || cpf.value=='' || cep.value == '' || celular.value =='' || senhaCadastro.value == '' || senhaRepeat.value == '' || senhaCadastro.value !== senhaRepeat.value){
      alert('Verifique os campos do formulário ');
      return false;
    }
    
  if(senhaCadastro.value.length< 8 || cpf.value.length <11 || cpf.value.length >11 || cep.value.length >8 || celular.value.length >12){
      alert('Verifique os campos do formulário');

     return false;
   }

//criando o objeto cadastroUsuario para usar na página de login

   let cadastroDoUsuario = [{

    "emailLogin": document.getElementById('emailCadastro').value,
    "senha": document.getElementById('senhaCadastro').value
  }
  ]

  localStorage.setItem(emailCadastro.value, JSON.stringify(cadastroDoUsuario));
  localStorage.setItem('emailLogin', emailCadastro.value);
  localStorage.setItem('senha', senhaCadastro.value);

alert("Passei");
  
window.location.href = "./login.html"; 

//fim do onclick
  }

//fim do onload
}





