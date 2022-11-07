const phoneInputs = document.querySelectorAll('input[data-tel-input]');

const setPhoneMak = () => {
  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '');
  };

  const onPhoneInput = (e) => {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = '';
    if (!inputNumbersValue) {
      input.value = '';
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') {
        input.value = '+7(' + inputNumbersValue;
      }
      const firstSymbols = (inputNumbersValue[0] === '8') ? '+7(' : '+7(';
      formattedInputValue = firstSymbols;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+7(' + inputNumbersValue.substring(4, 16);
    }
    input.value = formattedInputValue;
  };

  for (let i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener('input', onPhoneInput);
  }
};

export {setPhoneMak};
