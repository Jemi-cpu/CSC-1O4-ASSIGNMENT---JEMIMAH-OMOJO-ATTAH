document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertCurrencyButton = document.getElementById('convertCurrency');
    const convertedAmountOutput = document.getElementById('convertedAmount');

    convertCurrencyButton.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount)) {
            alert('Please enter a valid amount');
            return;
        }

        // Conversion rates (for demonstration purposes)
        const conversionRates = {
            USD: { USD: 1, EUR: 0.85, GBP: 0.73, JPY: 109.79, CNY: 6.47, NGN: 410.50 },
            EUR: { USD: 1.18, EUR: 1, GBP: 0.86, JPY: 130.06, CNY: 7.69, NGN: 486.27 },
            GBP: { USD: 1.37, EUR: 1.16, GBP: 1, JPY: 151.28, CNY: 8.94, NGN: 565.74 },
            JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0066, JPY: 1, CNY: 0.059, NGN: 37.45 },
            CNY: { USD: 0.15, EUR: 0.13, GBP: 0.11, JPY: 16.84, CNY: 1, NGN: 63.29 },
            NGN: { USD: 0.0024, EUR: 0.0021, GBP: 0.0018, JPY: 0.027, CNY: 0.0158, NGN: 1 }
        };

        const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
        convertedAmountOutput.value = convertedAmount.toFixed(2);
    });
});
