const exchangeRates = {
  USD: { USD: 1, INR: 83, EUR: 0.92 },
  INR: { USD: 0.012, INR: 1, EUR: 0.011 },
  EUR: { USD: 1.09, INR: 90, EUR: 1 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from-currency").value;
  const to = document.getElementById("to-currency").value;
  const resultEl = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultEl.innerText = "Please enter a valid amount.";
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = (amount * rate).toFixed(2);

  resultEl.innerText = `${amount} ${from} = ${converted} ${to}`;
}
