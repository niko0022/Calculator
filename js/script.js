document.addEventListener("DOMContentLoaded", function() {
    var display = document.getElementById("display");
    var currentOperand = "";
    var previousOperand = "";
    var operator = null;
  
    // Function to update the display
    function updateDisplay() {
      display.innerText = currentOperand || "0";
    }
  
    // Function to handle number and decimal inputs
    function handleOperand(value) {
      if (value === "." && currentOperand.includes(".")) return;
      currentOperand += value;
      updateDisplay();
    }
  
    // Function to handle operator inputs
    function handleOperator(value) {
      if (currentOperand === "") return;
      if (previousOperand !== "") {
        compute();
      }
      operator = value;
      previousOperand = currentOperand;
      currentOperand = "";
    }
  
    // Function to perform calculation
    function compute() {
      var computation;
      var prev = parseFloat(previousOperand);
      var current = parseFloat(currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
  
      switch (operator) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          break;
        case "*":
          computation = prev * current;
          break;
        case "/":
          computation = prev / current;
          break;
        default:
          return;
      }
  
      currentOperand = computation.toString();
      operator = null;
      previousOperand = "";
    }
  
    // Function to handle equals input
    function handleEquals() {
      compute();
      updateDisplay();
    }
  
    // Function to handle clear input
    function handleClear() {
      currentOperand = "";
      previousOperand = "";
      operator = null;
      updateDisplay();
    }
  
    // Function to handle sign change
    function handleSignChange() {
      if (currentOperand === "") return;
      currentOperand = (parseFloat(currentOperand) * -1).toString();
      updateDisplay();
    }
  
    // Function to handle percentage
    function handlePercentage() {
      if (currentOperand === "") return;
      currentOperand = (parseFloat(currentOperand) / 100).toString();
      updateDisplay();
    }
  
    // Event listeners for buttons
    var operandButtons = document.querySelectorAll(".operand");
    operandButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        handleOperand(button.innerText);
      });
    });
  
    var operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        handleOperator(button.innerText);
      });
    });
  
    document.querySelector(".equals").addEventListener("click", handleEquals);
    document.querySelector(".clear").addEventListener("click", handleClear);
    document.querySelector(".sign").addEventListener("click", handleSignChange);
    document.querySelector(".precent").addEventListener("click", handlePercentage);
  });
  