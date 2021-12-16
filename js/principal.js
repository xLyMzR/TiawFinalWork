onload = () =>{


    //CARREGA O NOME DO USUARIO CADASTRADO SALVO NO LOCALSTORAGE E EXIBE EM MENSAGEM DE BOAS VINDAS
    document.getElementById('welcomeMsg').innerHTML = `${localStorage.getItem('nameLogged')}`;
    document.getElementById('welcomeMsg').style.textDecoration = 'none';
  document.getElementById('welcomeMsg').style.fontWeight= 'bolder';
    

    //PREENCHER OS CARDS DE CATEGORIA DE SERVIÇO

 
    let areaCartao = document.getElementById("areaCards");




    let cadastroPrestador = JSON.parse(localStorage.getItem("prestadores"));

    
    console.log(cadastroPrestador[0].nomeUsuario);

  let x;

    for(x=0; x<cadastroPrestador.length; x++)
    {

     
      let dadosCadastrais = cadastroPrestador[x];

      console.log(dadosCadastrais);


      areaCartao.innerHTML = `
       <article class="card">
      <div class="topo">
          <h3 class="nome-servico" id="serviceOne">${dadosCadastrais.nomeUsuario}</h3>
          <a href="#"> <h3 class="nome-oferecedor" id="workerNameOne">Nome Prestador</h3></a>
      </div>
      <div class="descricao" id="descCardOne">
          <p></p>
      </div>
      <div class="botao">
          <button class="contratar">Contratar</button>
      </div>

  </article>`


    }
  

}




