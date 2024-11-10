const inputField = document.querySelector('input');
const submitButton = document.querySelector('button');
const duplicateField = document.getElementById('duplicateField');

inputField.addEventListener('input', () => {
    duplicateField.textContent = inputField.value;
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputField.value);
    inputField.value = '';
    duplicateField.textContent = '';
});