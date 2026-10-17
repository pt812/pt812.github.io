document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  let memory = 0;

  document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent === '=') {
        try {
          let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
          display.value = eval(expression);
        } catch (error) {
          display.value = 'Error';
        }
      } else if (button.textContent === 'C') {
        display.value = '';
      } else if (button.textContent === 'M+') {
        memory += parseFloat(display.value) || 0;
        display.value = '';
      } else if (button.textContent === 'M-') {
        memory -= parseFloat(display.value) || 0;
        display.value = '';
      } else if (button.textContent === 'MR') {
        display.value = memory;
      } else if (button.textContent === 'MC') {
        memory = 0;
        display.value = '';
      } else if (button.textContent === '√') {
        display.value = Math.sqrt(parseFloat(display.value));
      } else if (button.textContent === '²') {
        display.value = Math.pow(parseFloat(display.value), 2);
      } else if (button.textContent === '³') {
        display.value = Math.pow(parseFloat(display.value), 3);
      } else if (button.classList.contains('trigonometric')) {
        const fn = button.textContent;
        const radianValue = eval(`Math.${fn}(parseFloat(display.value) * (Math.PI / 180))`);
        display.value = parseFloat(radianValue.toFixed(8));
      } else if (button.classList.contains('logarithmic')) {
        const fn = button.textContent;
        display.value = eval(`Math.${fn}(parseFloat(display.value))`);
      } else {
        display.value += button.textContent;
      }
    });
  });

  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'Enter') {
      event.preventDefault();
      try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
      } catch (error) {
        display.value = 'Error';
      }
    } else if (key === 'Backspace') {
      event.preventDefault();
      display.value = display.value.slice(0, -1);
    } else if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
      display.value += key;
    } else if (key === 'c' || key === 'C') {
      display.value = '';
    }
  });
});
