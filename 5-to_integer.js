const arg = process.argv[2];
const number = Number(arg);

if (!isNaN(number)) {
  console.log(`My number: ${Math.floor(number)}`);
} else {
  console.log('Not a number');
}