// find lowest and largest
function highAndLow1(numbers) {
  const arr = numbers.split(' ').map(Number);
  let largestNumber = Number.MIN_SAFE_INTEGER;
  let smallestNumber = Number.MAX_SAFE_INTEGER;
  arr.forEach((el) => {
    if (el > largestNumber) {
      largestNumber = el;
    }
  });

  arr.forEach((el) => {
    if (el < smallestNumber) {
      smallestNumber = el;
    }
  });

  return `${largestNumber} ${smallestNumber}`;
}

function highAndLow(numbers) {
  const arr = numbers.split(' ').map(Number);
  const largest = Math.max(...arr);
  const smallestNumber = Math.min(...arr);
  return `${largest} ${smallestNumber}`;
}

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

function arrayReturn() {
  return [1, 2, 3, 45, 6, 9];
}

// string sort
function sorting(a) {
  const ans = a.sort((a, b) => b - a);
  return ans;
}

function order(words) {
  const arr = words
    .split(' ')
    .sort((a, b) => {
      let word1 = a.match(/\d/g);
      let word2 = b.match(/\d/g);
      return word1 - word2;
    })
    .join(' ');

  return arr;
}

// console.log(order('is2 Thi1s T4est 3a'));

function printerError(s) {
  const numErrors = s.match(/[^a-m]/g).length;
  return `${numErrors}/${s.length}`;
}
// var s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
// console.log(printerError(s));

// return the multiples of 3, 5 or 3 and 5
function solution(number) {
  if (number <= 0) {
    return -1;
  }
  let ans = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans += i;
      continue;
    }

    if (i % 3 === 0) {
      ans += i;

      continue;
    }

    if (i % 5 === 0) {
      ans += i;

      continue;
    }
  }
  return ans;
}

function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  let temp = n;
  while (temp >= 10) {
    temp = sumOfDigits(temp);
  }

  return temp;
}

function sumOfDigits(number) {
  let ans = 0;
  while (number > 0) {
    let r = number % 10;
    ans += r;

    number = Math.floor(number / 10);
  }
  return ans;
}

console.log(digitalRoot(456));
//6
