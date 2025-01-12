## Iterators

### 1. `forEach()`

- **Purpose**: Executes a provided function once for each array element.
- **Use Case**: When you need to perform side effects, such as logging or updating each element. It doesn’t return a new array.
- **Example**:
  ```jsx
  const arr = [1, 2, 3];
  arr.forEach((element) => console.log(element));
  ```

### 2. `map()`

- **Purpose**: Creates a new array with the results of calling a provided function on every element.
- **Use Case**: When you need to transform an array and return a new one.
- **Example**:
  ```jsx
  const arr = [1, 2, 3];
  const newArr = arr.map((x) => x * 2); // [2, 4, 6]
  ```

### 3. `filter()`

- **Purpose**: Creates a new array with all elements that pass the test implemented by the provided function.
- **Use Case**: When you need to filter out elements based on a condition.
- **Example**:
  ```jsx
  const arr = [1, 2, 3, 4];
  const newArr = arr.filter((x) => x % 2 === 0); // [2, 4]
  ```

### 4. `reduce()`

- **Purpose**: Executes a reducer function on each element, resulting in a single output value.
- **Use Case**: When you need to accumulate values, such as summing up numbers or concatenating strings.
- **Example**:
  ```jsx
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ); // 10
  ```

### 5. `some()`

- **Purpose**: Tests whether at least one element in the array passes the test implemented by the provided function.
- **Use Case**: When you need to check if any element meets a condition.
- **Example**:
  ```jsx
  const arr = [1, 2, 3];
  const hasEven = arr.some((x) => x % 2 === 0); // true
  ```

### 6. `every()`

- **Purpose**: Tests whether all elements in the array pass the test implemented by the provided function.
- **Use Case**: When you need to check if all elements meet a condition.
- **Example**:
  ```jsx
  const arr = [2, 4, 6];
  const allEven = arr.every((x) => x % 2 === 0); // true
  ```

### 7. `find()`

- **Purpose**: Returns the first element that satisfies the provided testing function.
- **Use Case**: When you need to find a single element based on a condition.
- **Example**:
  ```jsx
  const arr = [1, 2, 3];
  const firstEven = arr.find((x) => x % 2 === 0); // 2
  ```

### 8. `findIndex()`

- **Purpose**: Returns the index of the first element that satisfies the provided testing function.
- **Use Case**: When you need the index of the first element that meets a condition.
- **Example**:
  ```jsx
  const arr = [1, 2, 3];
  const firstEvenIndex = arr.findIndex((x) => x % 2 === 0); // 1
  ```

### Choosing the Right Iterator:

- **`forEach()`**: For side effects, like logging or modifying elements.
- **`map()`**: When you need to transform the elements of an array.
- **`filter()`**: For creating a subset of the array.
- **`reduce()`**: For accumulating a result from the array elements.
- **`some()`** and **`every()`**: For checking conditions across some or all elements.
- **`find()`** and **`findIndex()`**: For locating elements based on a condition.
