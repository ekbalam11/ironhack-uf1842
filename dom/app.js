// ¿En tu páis de origen es normal dejar propina?

const bill = document.querySelector('#bill-amount').value;
const percetangeTip = document.querySelector('#percetage-tip');
const totalTip = document.querySelector('#tip-amount');
const totalBill = document.querySelector('#total');
const button = document.querySelector('#calculate');

button.addEventListener('click', function () {
    bill.value= bill + percetangeTip;
    console.log("Esto tiene la const totalTip: ", totalTip);
    console.log(typeof totalTip.input);




}
);