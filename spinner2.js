let spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let x = 100;
for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, x += 200);
}

// setTimeout(() => {
//   process.stdout.write();
// }, 300);

// setTimeout(() => {
//   process.stdout.write();
// }, 500);

// setTimeout(() => {
//   process.stdout.write();
// }, 700);