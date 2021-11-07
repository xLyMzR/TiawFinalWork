onload = () =>{


    //CARREGA O NOME DO USUARIO CADASTRADO SALVO NO LOCALSTORAGE E EXIBE EM MENSAGEM DE BOAS VINDAS
    document.getElementById('welcomeMsg').innerHTML = localStorage.getItem('nomeUsuario');
    document.getElementById('welcomeMsg').style.textDecoration = 'underline';
    

    //PREENCHER OS CARDS DE  CATEGORIA DE SERVIÇO

    var servicesCards = ['Elétrica', 'Arquitetura', 'Encanamento', 'Design']
   
    //guardando no localStorage
    localStorage.setItem('sOne', servicesCards[0]);
    localStorage.setItem('sTwoo', servicesCards[1]);
    localStorage.setItem('sThree', servicesCards[2]);
    localStorage.setItem('sFour', servicesCards[3]);

    //carregando Nos cards
    document.getElementById('serviceOne') .innerHTML =  localStorage.getItem('sOne');
    document.getElementById('serviceTwoo') .innerHTML =  localStorage.getItem('sTwoo');
    document.getElementById('serviceThree') .innerHTML =  localStorage.getItem('sThree');
    document.getElementById('serviceFour') .innerHTML =  localStorage.getItem('sFour');
 

  //PREENCHER OS CARDS DE  Prestadores Relacionados aos cards;

  var workersCards = ['Maria do carmo','Martin braga', 'Mateus Souza', 'Raquel prates'];
   
    localStorage.setItem('workerOne', workersCards[0]);
    localStorage.setItem('workerTwoo', workersCards[1]);
    localStorage.setItem('workerThree', workersCards[2]);
    localStorage.setItem('workerFour', workersCards[3]);


    document.getElementById('workerNameOne').innerHTML =  localStorage.getItem('workerOne');
    document.getElementById('workerNameTwoo').innerHTML =  localStorage.getItem('workerTwoo');
    document.getElementById('workerNameThree').innerHTML =  localStorage.getItem('workerThree');
    document.getElementById('workerNameFour').innerHTML =  localStorage.getItem('workerFour');

//PREENCHER DESC DOS CARDS DE SERVICO

var serviceCardsDescription = ['Eletricista industrial, residencial e predial,mais de 25 anos de atendimento, montagens, instalações e manutenção NR10,eficiencia energética, orçamento sem compromisso.', 'Projetos de arquitetura, Arquitetura de interiores Projetos junto à vigilância sanitária Reformas residenciais e comerciais, Consultorias, Laudos, Maquetes 3D e Execução de obras', 'Encanador: registros, chuveiros, torneiras, válvulas de descarga, caixas aclopadas, desentupimento de pias, ralos, vasos, esgoto residencial. Ligue, trabalho a 25 anos com reparos hidráulicos.', 'Sou Designer de Interiores e faço consultorias, projetos de móveis e marcenaria, projetos de interiores comerciais e residências, e também reformas.'];
//setando no localSTORAGE
localStorage.setItem('descWorkCardOne', serviceCardsDescription[0]);
localStorage.setItem('descWorkCardTwoo', serviceCardsDescription[1]);
localStorage.setItem('descWorkCardThree', serviceCardsDescription[2]);
localStorage.setItem('descWorkCardFour', serviceCardsDescription[3]);

document.getElementById('descCardOne').innerHTML = localStorage.getItem('descWorkCardOne');
document.getElementById('descCardTwoo').innerHTML = localStorage.getItem('descWorkCardTwoo');
document.getElementById('descCardThree').innerHTML = localStorage.getItem('descWorkCardThree');
document.getElementById('descCardFour').innerHTML = localStorage.getItem('descWorkCardFour');
}