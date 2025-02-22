function myFunction() {
  let x = 10;
  if (true) {
    x = 20; // Assign a new value to x in the outer scope
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
} 