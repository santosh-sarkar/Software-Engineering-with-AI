function greet(name) {
    return `Hello ${name}`;
}

function processUser(callback) {
    return callback("Santosh");
}

console.log(processUser(greet));