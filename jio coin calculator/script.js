// Get DOM elements
const jioCoinsInput = document.getElementById('jiocoins');
const exchangeRateInput = document.getElementById('exchange-rate');
const calculateBtn = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

// Calculate function
calculateBtn.addEventListener('click', () => {
  const jioCoins = parseFloat(jioCoinsInput.value);
  const exchangeRate = parseFloat(exchangeRateInput.value);

  if (isNaN(jioCoins)) {
    resultElement.textContent = "Please enter a valid number of JioCoins.";
    resultElement.style.color = "red";
  } else {
    const totalValue = jioCoins * exchangeRate;
    resultElement.textContent = `Total Value: ₹${totalValue.toFixed(2)}`;
    resultElement.style.color = "#333";
  }
});