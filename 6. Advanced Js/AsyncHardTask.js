function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

function asyncFactorial(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let result = factorial(n);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
}

async function calculateFactorial(num) {
  try {
    let result = await asyncFactorial(num);
    console.log(`Factorial: ${result}`);
  } catch (e) {
    console.error(e);
  }
}

calculateFactorial(20);
console.log("Thread isn't block");
