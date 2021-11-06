onload = () =>{



    document.getElementById('welcomeMsg').innerHTML = localStorage.getItem('nomeUsuario');
    document.getElementById('welcomeMsg').style.textDecoration = 'underline';
    




}