document.addEventListener('DOMContentLoaded', (event) => {
    const inputCelsius = document.getElementById('inputCelsius');
    const outputFahrenheit = document.getElementById('outputFahrenheit');
    const convertToFahrenheit = document.getElementById('convertToFahrenheit');

    const inputFahrenheit = document.getElementById('inputFahrenheit');
    const outputCelsius = document.getElementById('outputCelsius');
    const convertToCelsius = document.getElementById('convertToCelsius');

    convertToFahrenheit.addEventListener('click', () => {
        const celsius = parseFloat(inputCelsius.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9 / 5) + 32;
            outputFahrenheit.value = fahrenheit.toFixed(2);
        } else {
            alert('Please enter a valid number');
        }
    });

    convertToCelsius.addEventListener('click', () => {
        const fahrenheit = parseFloat(inputFahrenheit.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5 / 9;
            outputCelsius.value = celsius.toFixed(2);
        } else {
            alert('Please enter a valid number');
        }
    });
});
