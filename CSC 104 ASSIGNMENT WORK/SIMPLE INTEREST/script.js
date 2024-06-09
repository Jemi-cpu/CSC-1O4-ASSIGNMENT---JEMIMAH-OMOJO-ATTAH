document.addEventListener('DOMContentLoaded', () => {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const calculateInterestButton = document.getElementById('calculateInterest');
    const interestOutput = document.getElementById('interest');

    calculateInterestButton.addEventListener('click', () => {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value);
        const time = parseFloat(timeInput.value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            alert('Please enter valid numbers');
            return;
        }

        const interest = (principal * rate * time) / 100;
        interestOutput.value = interest.toFixed(2);
    });
});
