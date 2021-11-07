onload = () =>{


    //CARREGA O NOME DO USUARIO CADASTRADO SALVO NO LOCALSTORAGE E EXIBE EM MENSAGEM DE BOAS VINDAS
    document.getElementById('welcomeMsg').innerHTML = localStorage.getItem('nomeUsuario');
    document.getElementById('welcomeMsg').style.textDecoration = 'underline';
    

    //PREENCHER OS CARDS DE CATEGORIA DE SERVIÇO

  let cardOne = {
    nameWorker: "Maria do Carmo",
    nameService: "Elétrica",
    serviceDesc: 'Eletricista industrial, residencial e predial,mais de 25 anos de atendimento, montagens, instalações e manutenção NR10, eficiencia energética e orçamento sem compromisso.'
  }
  
  let cardTwoo = {
    nameWorker: "José Henrique Fernandes",
    nameService: "Encanamento",
    serviceDesc: 'Encanador: registros, chuveiros, torneiras, válvulas de descarga, caixas aclopadas, desentupimento de pias, ralos, vasos, esgoto residencial. Ligue, trabalho a 25 anos com reparos hidráulicos.'
  }

  let cardThree = {
    nameWorker: "Martin Braga",
    nameService: "Arquitetura",
    serviceDesc: 'Projetos de arquitetura, Arquitetura de interiores, Projetos junto à vigilância sanitária, Reformas residenciais e comerciais, Consultorias, Laudos, Maquetes 3D e Execução de obras.'
  }

  let cardFour = {
    nameWorker: "Raquel Prates",
    nameService: "Design",
    serviceDesc: 'Sou Designer de Interiores e faço consultorias, projetos de móveis e marcenaria, projetos de interiores comerciais e residências, e também reformas.'
  }
  

  //guardando os nomes do serviço no localstorage
  localStorage.setItem('nomeCardUm', cardOne.nameService);
  localStorage.setItem('nomeCardDois', cardTwoo.nameService);
  localStorage.setItem('nomeCardTres', cardThree.nameService);
  localStorage.setItem('nomeCardQuatro', cardFour.nameService);
  //guardando os nomes dos trabalhadores no localstorage
  localStorage.setItem('servicoCardUm', cardOne.nameWorker);
  localStorage.setItem('servicoCardDois', cardTwoo.nameWorker);
  localStorage.setItem('servicoCardTres', cardThree.nameWorker);
  localStorage.setItem('servicoCardQuatro', cardFour.nameWorker);
  //GUARDANDO AS DESC do serviço no localstorage
  localStorage.setItem('descCardUm', cardOne.serviceDesc);
  localStorage.setItem('descCardDois', cardTwoo.serviceDesc);
  localStorage.setItem('descCardTres', cardThree.serviceDesc);
  localStorage.setItem('descCardQuatro', cardFour.serviceDesc);


  //ADDICIONANDO AS INFORMAÇOES AOS RESPECTIVOS CARDS

  //TIPOS DO SERVIÇOS
  document.getElementById('serviceOne').innerHTML = localStorage.getItem('nomeCardUm'); 
  document.getElementById('serviceTwoo').innerHTML =  localStorage.getItem('nomeCardDois');
  document.getElementById('serviceThree').innerHTML =  localStorage.getItem('nomeCardTres');
  document.getElementById('serviceFour').innerHTML =  localStorage.getItem('nomeCardQuatro');

  //NOME DOS PRESTADORES
  document.getElementById('workerNameOne').innerHTML = localStorage.getItem('servicoCardUm'); 
  document.getElementById('workerNameTwoo').innerHTML =  localStorage.getItem('servicoCardDois');
  document.getElementById('workerNameThree').innerHTML =  localStorage.getItem('servicoCardTres');
  document.getElementById('workerNameFour').innerHTML =  localStorage.getItem('servicoCardQuatro');
  
  //DESC DOS SERVIÇOS

  document.getElementById('descCardOne').innerHTML = localStorage.getItem('descCardUm'); 
  document.getElementById('descCardTwoo').innerHTML =  localStorage.getItem('descCardDois');
  document.getElementById('descCardThree').innerHTML =  localStorage.getItem('descCardTres');
  document.getElementById('descCardFour').innerHTML =  localStorage.getItem('descCardQuatro');


}




