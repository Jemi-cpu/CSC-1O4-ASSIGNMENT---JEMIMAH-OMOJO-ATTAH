document.addEventListener('DOMContentLoaded', () => {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const compoundsInput = document.getElementById('compounds');
    const calculateInterestButton = document.getElementById('calculateInterest');
    const interestOutput = document.getElementById('interest');

    calculateInterestButton.addEventListener('click', () => {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value) / 100; // Convert percentage to decimal
        const time = parseFloat(timeInput.value);
        const compounds = parseFloat(compoundsInput.value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compounds)) {
            alert('Please enter valid numbers');
            return;
        }

        const amount = principal * Math.pow(1 + rate / compounds, compounds * time);
        const compoundInterest = amount - principal;
        interestOutput.value = compoundInterest.toFixed(2);
    });
});
