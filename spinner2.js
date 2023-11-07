let spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let x = 100;

const spinner = setInterval(() => {
  for (const char of spinnerChars) {
    setTimeout(() => {
      process.stdout.write(char);
    }, x += 200);
  }
  if (x > 2000) {
    clearInterval(spinner);
  }
}, x);

setTimeout(() => {
  process.stdout.write('\n');
}, x);