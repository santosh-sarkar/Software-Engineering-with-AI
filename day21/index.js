debugger;
let x = 1;
console.log(x)

new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber == 5) {
    resolve("Success! The number is 5.");
  } else {
    reject("Failure! The number is not 5.");
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

  console.log(2);