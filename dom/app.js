// ¿En tu páis de origen es normal dejar propina? sí, suele ser del 10% y casi obligatorio.
const button = document.querySelector('#calculate');

//Crear una función para calcular la propina
function calculateTip(){
    const bill = parseFloat(document.querySelector('#bill-amount').value);
    const percentageTip = document.querySelector('#percentage-tip').value;
    const tipAmount = (bill *(percentageTip / 100));
    const totalAmount = (bill + parseFloat(tipAmount));    
    document.querySelector('#tip-amount').value = tipAmount.toFixed(2);
    document.querySelector('#total').value = totalAmount.toFixed(2);
    document.querySelector('#tip-amount').disabled = false;
    document.querySelector('#total').disabled = false;
    return;
}

button.addEventListener('click', calculateTip);


