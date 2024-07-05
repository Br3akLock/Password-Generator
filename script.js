function updateLengthValue(value) {
    document.getElementById('length-value').innerText = value;
} 
function generatePassword() {
    const length = document.getElementById('length').value;
    const pronounceable = document.getElementById('pronounceable').checked;
    const readable = document.getElementById('readable').checked;
    const allChars = document.getElementById('all-chars').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    
    let charset = '';
    if (allChars) {
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) charset += '0123456789';
        if (symbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    } else {
        if (pronounceable) charset = 'abcdefghijklmnopqrstuvwxyz';
        if (readable) charset = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    const passwordOutput = document.getElementById('password-output');
    if (password) {
        passwordOutput.innerText = password;
        passwordOutput.classList.remove('hidden');
    } else {
        passwordOutput.classList.add('hidden');
    }
}