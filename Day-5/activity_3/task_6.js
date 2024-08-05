// Write an arrow function to check if a string contains a specific character;

const isStringContain = (string, char) => {
  if (string.includes(char)) {
    return true;
  } else {
    return false;
  }
};

const result = isStringContain("chai aur code", "code");

console.log({ result });
