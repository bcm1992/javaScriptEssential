    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        let str1 = parseInt(document.getElementById('input3').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let result = multiply(num1, num2) + "," + add(num1, num2) + "," + devide(num1, num2)+" - "+str1;
    
                        // Display the result
                        displayResult(result);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
                function add(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a + b;
                }
                function multiply(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a * b;
                }
                function devide(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a / b;
                }
    
                function displayResult(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `The result is: ${result}`;
                }
            