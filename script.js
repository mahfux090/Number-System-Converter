function convert() {
    const numberInput = document.getElementById('number').value;
    const fromBase = document.getElementById('from').value;
    const toBase = document.getElementById('to').value;

    let result;

    if (fromBase === 'binary') {
        if (toBase === 'decimal') {
            result = parseInt(numberInput, 2).toString(10);
        } else if (toBase === 'hexadecimal') {
            result = parseInt(numberInput, 2).toString(16);
        } else if (toBase === 'octal') {
          result = parseInt(numberInput, 2).toString(8);
        } else {
            result = numberInput;
        }
    } else if (fromBase === 'decimal') {
        if (toBase === 'binary') {
            result = parseInt(numberInput, 10).toString(2);
        } else if (toBase === 'hexadecimal') {
            result = parseInt(numberInput, 10).toString(16);
           } else if (toBase === 'octal') {
            result = parseInt(numberInput, 2).toString(8);
        } else {
            result = numberInput;
        }
    } else if (fromBase === 'hexadecimal') {
        if (toBase === 'binary') {
            result = parseInt(numberInput, 16).toString(2);
        } else if (toBase === 'decimal') {
            result = parseInt(numberInput, 16).toString(10);
           } else if (toBase === 'octal') {
            result = parseInt(numberInput, 2).toString(8);
        } else {
            result = numberInput;
        }
    } else if (fromBase === 'octal') {
      if (toBase === 'binary') {
        result = parseInt(numberInput, 8).toString(2);
      } else if (toBase === 'decimal') {
        result = parseInt(numberInput, 8).toString(10);
      } else if (toBase === 'hexadecimal') {
        result = parseInt(numberInput, 8).toString(16);
      } else {
        result = numberInput;
      }
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
function reset() {
    document.getElementById('number').value = '';
    document.getElementById('from').selectedIndex = 0;
    document.getElementById('to').selectedIndex = 0;
    document.getElementById('result').innerText = '';
}
