const range = (start, end, step) => {
  let array = [];// let i = 0;
  for (let i = start; i <= end; i += step) {

    // i = i + array;
    array.push(i);
  }
  return array;

}
console.log(range(0, 10, 3));
console.log(range(10, 30, 4));
console.log(range(-5, 22, 2));

