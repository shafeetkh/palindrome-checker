const input = document.querySelector("#submission");
const button = document.querySelector("button");
const display = document.querySelector("#display");


button.addEventListener('click', () => {
	let word = input.value.toLowerCase(), displayWord = input.value;
	let wordArray = [];

	for (letter of word) {
		wordArray.push(letter);
	}

	const reversed = word.split("").reverse()

	display.className = '';
	input.value = '';

	if (wordArray.join("") === reversed.join("")) {
		display.classList.add("is-palindrome");
		display.innerText = `'${displayWord}' is a palindrome!`
	} else {
		display.classList.add("is-not-palindrome");
		display.innerText = `'${displayWord}' is NOT a palindrome!`
	}
})