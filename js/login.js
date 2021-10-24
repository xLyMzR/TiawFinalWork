onload = () =>{
//Verificação de campo vazio
formularioLogin.onchange = ()=> {

let campovazio = document.getElementById('campovazio');

    if(email.value == ''){
       
        campovazio.innerHTML = "Campo obrigatório!";
        campovazio.style.color = "orange";
        campovazio.style.fontSize = "0.7em";

        
    }
    else{campovazio.innerHTML = '';}

    if(senha.value == ''){
        campovazioSenha.innerHTML = "Campo obrigatório!";
        campovazioSenha.style.color = "orange";
        campovazioSenha.style.fontSize = "0.7em";
    }
    else{campovazioSenha.innerHTML = ''}
}

//VERIFICAÇÃO DO USUARIO CADASTRADO PARA LOGIN
    formularioLogin.onsubmit = ()=>{
        if(email.value == '' || senha.value == ''){
            return false;
            
        }
    if(email.value !== localStorage.getItem('emailLogin') && senha.value !== localStorage.getItem('senha')){
        
        return false;
    }
    else{
       return true;
    }
  
}

}