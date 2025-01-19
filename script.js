function checkPalindrome() {
    const input = document.getElementById('textInput').value;
    const resultDiv = document.getElementById('result');

    if (!input) {
        resultDiv.textContent = 'Please enter some text.';
        resultDiv.className = 'result error';
        return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        resultDiv.textContent = 'Yes, it is a palindrome!';
        resultDiv.className = 'result success';
    } else {
        resultDiv.textContent = 'No, it is not a palindrome.';
        resultDiv.className = 'result error';
    }
}

function resetFields() {
    document.getElementById('textInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = 'result';
}
