function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || ''; // Evaluate the input
    } catch (error) {
        display.value = "Error"; // Show error for invalid input
    }
}