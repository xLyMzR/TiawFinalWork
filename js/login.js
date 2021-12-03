onload = () =>{
let emailLogin = document.getElementById('email');
let senhaLogin = document.getElementById('senha');



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



 butLog.onclick = ()=>{
    var cadastroUsuario =JSON.parse(localStorage.getItem(email.value));


        let emailDigitado = document.getElementById("email");
        let senhaDigitada = document.getElementById("senha");

        if(email.value == '' || senha.value == ''){
            return false;
            
        }
    if(emailDigitado.value !== cadastroUsuario[0].emailLogin && senhaDigitad.value !== cadastroUsuario[0].senha){
        alert("usuario ou senha invalidos");
        return false;
    }
       localStorage.setItem("nameLogged", cadastroUsuario[0].nomeUsuario);
       localStorage.setItem("userLogged", JSON.stringify(cadastroUsuario));
        window.location.href='./principal.html';
    
}


}