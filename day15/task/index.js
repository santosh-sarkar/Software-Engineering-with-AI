function caesarCipher(text, shift) {
    const normalized = ((shift % 26) + 26) % 26;    
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + normalized) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + normalized) % 26) + 97);
        } else {
            result += char;
        }
    }

    return result;
}

const message = "Ankit";
const encrypted = caesarCipher(message, 3);
const decrypted = caesarCipher(encrypted, -3);

console.log("Original: ", message);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
