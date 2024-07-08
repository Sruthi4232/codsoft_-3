let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button-grid button');
let operator = '';
let num1 = '';
let num2 = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonText = button.textContent;
    
    if (buttonText === 'C') {
      display.value = '';
      num1 = '';
      num2 = '';
      operator = '';
      resultDisplayed = false;
    } else if (buttonText === '=') {
      if (operator !== '' && num2 !== '') {
        let result;
        if (operator === '+') {
          result = parseFloat(num1) + parseFloat(num2);
        } else if (operator === '-') {
          result = parseFloat(num1) - parseFloat(num2);
        } else if (operator === '*') {
          result = parseFloat(num1) * parseFloat(num2);
        } else if (operator === '/') {
          if (num2 !== '0') {
            result = parseFloat(num1) / parseFloat(num2);
          } else {
            result = 'Error';
          }
        }
        display.value = result;
        num1 = '';
        num2 = '';
        operator = '';
        resultDisplayed = true;
      }
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      if (operator === '') {
        num1 = display.value;
        operator = buttonText;
        display.value += ' ' + operator + ' ';
        resultDisplayed = false;
      }
    } else {
      if (resultDisplayed) {
        display.value = '';
        resultDisplayed = false;
      }
      display.value += buttonText;
      if (operator !== '') {
        let parts = display.value.split(operator);
        num2 = parts[1].trim();
      }
    }
  });
});
