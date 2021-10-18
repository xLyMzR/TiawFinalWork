onload = () =>{

document.getElementById('btn').disabled = true;
  
//VERIFICAÇÃO EM TEMPO REAL

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
//tratamento campo CEP
  cep.oninput = () =>{

    cep.value = cep.value.toLowerCase();
    
    if('|!@#$%ˆ&*`ªº´()+~°[]^:.,¹²³££¢¬¬¬¬|"{}?/^~*_=-;¨abcdefçghijklmnopqrswtuvxyz'.indexOf(cep.value.charAt(cep.value.length - 1)) >=0 ){
    
      cep.value = cep.value.substr(0, cep.value.length - 1);
    }
    


  }
//tratamento campo CELL
  celular.oninput = () =>{

    celular.value = celular.value.toLowerCase();
    
    if('|!@`´#$%ˆ&*()ªº°+~[]^:.,¹²³££¢¬¬¬¬|"{}?/^~*_=-;¨abcdefwgçhijklmnopqrstuvxyz'.indexOf(celular.value.charAt(celular.value.length - 1)) >=0 ){
    
      celular.value = celular.value.substr(0, celular.value.length - 1);
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
  console.log(concordaComTermos.checked);

    if(concordaComTermos.checked == true){
      document.getElementById('btn').disabled = false;
    }
    else{
      document.getElementById('btn').disabled = true;
    }
  }

 //verificação de envio 
  cadastroFormulario.onsubmit = () =>{
  
    if(senhaRepeat.value == senhaCadastro.value && senhaRepeat.value.length >=8 ){
      return true;
    }

    else{

      alert("As senhas devem ser iguais e com 8 ou mais digitos!");
      
      return false;      
     
    }

  }

}



