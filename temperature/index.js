function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unitSelect = document.getElementById("unit");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    const resultElement = document.getElementById("result");
    let convertedTemperature;

    if (selectedUnit === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultElement.innerHTML = `${temperatureInput} Celsius is ${convertedTemperature.toFixed(2)} Fahrenheit`;
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultElement.innerHTML = `${temperatureInput} Fahrenheit is ${convertedTemperature.toFixed(2)} Celsius`;
    } else if (selectedUnit === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        resultElement.innerHTML = `${temperatureInput} Kelvin is ${convertedTemperature.toFixed(2)} Celsius`;
    }
}