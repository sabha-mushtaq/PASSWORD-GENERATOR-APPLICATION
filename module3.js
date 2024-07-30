export function randompassword() {
    let password = "";
    const lengthInput = document.getElementById('inll');
    const length = lengthInput ? parseInt(lengthInput.value) || 10 : 10; // Default length to 10 if input is invalid

    let includeUpperLetters = document.getElementById('inlcl').classList.contains('active');
    let includeLowerLetters = document.getElementById('inlc').classList.contains('active');
    let includeNumbers = document.getElementById('inn').classList.contains('active');
    let includeSymbols = document.getElementById('ins').classList.contains('active');

    let charset = '';

    if (includeLowerLetters) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeUpperLetters) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers) {
        charset += '0123456789';
    }
    if (includeSymbols) {
        charset += '!@#$%^&*_+';
    }

    if (charset.length === 0) {
        return "No character sets selected"; // Return early if no character sets are selected
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

export function generatePassword() {
    const password = randompassword();
    const passwordContainer = document.getElementById('password-div');
    const passwordDisplay = passwordContainer.querySelector('h1');
    passwordDisplay.textContent = password;
}





