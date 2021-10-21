onload = () =>{

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