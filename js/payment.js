onload = () => {
  document.getElementById("cardsButtonInfo").onclick = () => {

    document.getElementById("boxAndTextForInfoPaymentArea").innerHTML =
      "VOCÊ NÃO POSSUI CARTÃO CADASTRADO";

    document.getElementById("informationPaymentArea").style =
      " border: 50px solid orange; ";

    document.getElementById("addPaymentMethodArea").style.display = "flex";
    document.getElementById("addPaymentMethodArea").style.flexDirection = "row";
    document.getElementById("addPaymentMethodArea").style.justifyContent =
      "center";
    document.getElementById("addPaymentMethodBtn").innerHTML = "ADD CARD";
  };

  document.getElementById("paypalButtonInfo").onclick = () => {

    document.getElementById("boxAndTextForInfoPaymentArea").innerHTML =
      "VOCÊ NÃO POSSUI PAYPAL CADASTRADO";

    document.getElementById("informationPaymentArea").style =
      " border: 50px solid orange; ";

    document.getElementById("addPaymentMethodArea").style.display = "flex";
    document.getElementById("addPaymentMethodArea").style.flexDirection = "row";
    document.getElementById("addPaymentMethodArea").style.justifyContent =
      "center";
    document.getElementById("addPaymentMethodBtn").innerHTML = "ADD ACCOUNT";
  };

  document.getElementById("pixButtonInfo").onclick = () => {

    document.getElementById("boxAndTextForInfoPaymentArea").innerHTML =
      "VOCÊ NÃO POSSUI CONTA PIX CADASTRADA";

    document.getElementById("informationPaymentArea").style =
      " border: 50px solid orange; ";

    document.getElementById("addPaymentMethodArea").style.display = "flex";
    document.getElementById("addPaymentMethodArea").style.flexDirection = "row";
    document.getElementById("addPaymentMethodArea").style.justifyContent =
      "center";
    document.getElementById("addPaymentMethodBtn").innerHTML = "ADD ACCOUNT";
  
  };

//CARREGANDO DIFERENTES TIPOS DE DADOS PARA ADD CONTAS E CARTOES
  localStorage.setItem('paymentOptionCards', 'false' );
  localStorage.setItem('paymentOptionPaypal', 'false' );
  localStorage.setItem('paymentOptionPix', 'false' );
























 
 // document.getElementById("modalInfoOne").


};
