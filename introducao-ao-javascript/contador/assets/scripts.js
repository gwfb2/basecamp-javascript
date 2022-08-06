let count = 0;

function verifyNumber() {
	if (count < 0) {
		currentNumber.style.color = 'red';
		return;
	}
	currentNumber.style.color = 'black';
}

function increment() {
	count++;
	currentNumber.innerHTML = count;
	verifyNumber();
}

function decrement() {
	count--;
	currentNumber.innerHTML = count;
	verifyNumber();
}

const currentNumber = document.getElementById('currentNumber');
const plus = document.querySelector('.adicionar');
const minus = document.querySelector('.subtrair');

plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);
