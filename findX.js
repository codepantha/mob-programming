// optimize
function findX(n) {
  let x = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2*n; j++)
      x += i + j;
  }
  return x;
}

// Optimizing the function above
const findX = (n) => n * n * (3 * n-2);
