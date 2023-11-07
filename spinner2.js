let spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 100);
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