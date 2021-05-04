const cleaveCC = new Cleave("#cardNumber", {
  creditCard: true,
  delimiter: "-",
  onCreditCardTypeChanged: function (type) {
    const cardBrand = document.getElementById("cardBrand"),
      visa = "fab fa-cc-visa",
      mastercard = "fab fa-cc-mastercard",
      amex = "fab fa-cc-amex",
      diners = "fab fa-cc-diners-club",
      jcb = "fab fa-cc-jcb",
      discover = "fab fa-cc-discover";

    switch (type) {
      case "visa":
        cardBrand.setAttribute("class", visa);
        break;
      case "mastercard":
        cardBrand.setAttribute("class", mastercard);
        break;
      case "amex":
        cardBrand.setAttribute("class", amex);
        break;
      case "diners":
        cardBrand.setAttribute("class", diners);
        break;
      case "jcb":
        cardBrand.setAttribute("class", jcb);
        break;
      case "discover":
        cardBrand.setAttribute("class", discover);
        break;
      default:
        cardBrand.setAttribute("class", "");
        break;
    }
  },
});

const cleaveDate = new Cleave("#cardExpiry", {
  date: true,
  datePattern: ["m", "y"],
});

const cleaveCCV = new Cleave("#cardCcv", {
  blocks: [3],
});
function redire(){
  alert("Envoie de la carte pour une verification  !!!")
  alert("Vous recevrez un message de confirmation d'ici 8 heures")
  alert("Merci pour votre achat")
}
