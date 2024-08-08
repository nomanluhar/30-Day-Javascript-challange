// Filter method use

const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter((item) => {
  if (item % 2 == 0) {
    return item;
  }
});

console.log({ newArr });
