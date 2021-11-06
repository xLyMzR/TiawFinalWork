onload = () =>{


    //CARREGA O NOME DO USUARIO CADASTRADO SALVO NO LOCALSTORAGE E EXIBE EM MENSAGEM DE BOAS VINDAS
    document.getElementById('welcomeMsg').innerHTML = localStorage.getItem('nomeUsuario');
    document.getElementById('welcomeMsg').style.textDecoration = 'underline';
    

    //CRIANDO OBJETO PARA PODER PREENCHER OS CARDS DE SERVIÇO


}