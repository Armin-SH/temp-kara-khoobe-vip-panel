import persianToEnglish from "./persian-to-english-number";

const nationalIdValidation = (code: string) => {
  code = persianToEnglish(code);
  if (code.length < 10) {
    return false;
  }
  const c = parseInt(code.substr(9, 1), 10);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(code.substr(i, 1), 10) * (10 - i);
  }
  sum = sum % 11;
  return (sum < 2 && c == sum) || (sum >= 2 && c == (11 - sum));
};

export default nationalIdValidation;
