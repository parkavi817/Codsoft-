let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let operator = '';
let num1 = '';
let num2 = '';
let result = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        if (buttonText === 'C') {
            display.value = '';
            operator = '';
            num1 = '';
            num2 = '';
            result = '';
        } else if (buttonText === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (buttonText === '=' && operator !== '') {
            num2 = display.value;
            result = calculate(num1, operator, num2);
            display.value = result;
            operator = '';
            num1 = '';
            num2 = '';
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            if (operator !== '' && num2 !== '') {
                num2 = display.value;
                result = calculate(num1, operator, num2);
                display.value = result;
            }
            operator = buttonText;
            num1 = display.value;
            display.value = '';
        } else {
            display.value += buttonText;
        }
    });

});
function calculate(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }

    return result;
}

 





