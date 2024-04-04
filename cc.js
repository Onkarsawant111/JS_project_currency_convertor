const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convert = document.getElementById("convert");

convert.addEventListener("click", function() {
  let fromCurrency = from.value;
  let toCurrency = to.value;
  let amt = amount.value;
  
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      let rate = data.rates[toCurrency];
      let totalResult = rate * amt;
      result.innerHTML = `${amt} ${fromCurrency} = ${totalResult} ${toCurrency}`;
    });
});
