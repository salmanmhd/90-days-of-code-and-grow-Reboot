// 1
function XO(str) {
  if (str.length === 0) return true;
  str = str.toLowerCase();

  let xCount = str.split('x').length - 1;
  let oCount = str.split('o').length - 1;

  return xCount === oCount;
}

// console.log(XO('xooxx'));
// 2
function findNextSquare(sq) {
  //   let i = Math.floor(sq / 2);
  //   let j = 1;
  //   let ans = -1;
  //   while (j <= i) {
  //     if (j * j === sq) {
  //       j++;
  //       ans = j * j;
  //       break;
  //     }
  //     j++;
  //   }

  //   return ans;
  let root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return (root + 1) ** 2;
  }
  return -1;
}

// 3
function cakes(recipe, available) {
  if (recipe.length > available.length) return 0;

  let minCakes = Number.MAX_SAFE_INTEGER;

  for (const [ingredient, amountRequired] of Object.entries(recipe)) {
    if (!available[ingredient]) {
      return 0;
    }

    const amountAvailable = available[ingredient];
    const possibleCakes = Math.floor(amountAvailable / amountRequired);
    minCakes = Math.min(minCakes, possibleCakes);
  }

  return minCakes;
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

// console.log(recipe['flour']);
