
const depositField = document.getElementById('depositField');
depositField.addEventListener('click', function () {

    const inputField = document.getElementById('inputField');
    const deposit = inputField.value;
    const depositString = parseFloat(deposit);
    console.log(typeof depositString)

    const addDepositMoney = document.getElementById('addDepositMoney');
    const addMoney = addDepositMoney.innerText;
    const addMoneyString = parseFloat(addMoney);
    console.log(typeof addMoneyString)

    // console.log(addMoney);
    addDepositMoney.innerText = inputField.value;

    const currentAmount = depositString + addMoneyString;
    addDepositMoney.innerText = currentAmount;
    inputField.value = '';

    const balaceAddMoney = document.getElementById('balaceAddMoney');
    const balanceString = balaceAddMoney.innerText;
    const balance = parseFloat(balanceString);
    const totalCurrentBalance = balance + depositString;
    balaceAddMoney.innerText = totalCurrentBalance;
})

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawString = withdrawInput.value;

    const withdraw = parseFloat(withdrawString);

    const withdrawMoney = document.getElementById('withdrawMoney');
    const currentWithdrawString = withdrawMoney.innerText;
    const currentWithdraw = parseFloat(currentWithdrawString);
    withdrawMoney.innerText = withdrawString;


    const remainAmount = withdraw + currentWithdraw;
    withdrawMoney.innerText = remainAmount;


    const balaceRemain = document.getElementById('balaceAddMoney');
    const balanceString = balaceRemain.innerText;
    const balance = parseFloat(balanceString);
    const totalCurrentBalance = balance - withdraw;
    balaceRemain.innerText = totalCurrentBalance;


    withdrawInput.value = '';
})