const calcDigit = (substring: string) => {
  const numbers = substring.split("").map(Number);
  const modulus = numbers.length + 1;
  const sum = numbers.reduce((acc, number, index) => acc + number * (modulus - index), 0);
  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
};

const validateCPF = (cpf: string) => {
  cpf = cpf.replace(/\D/gi, "");
  if (!cpf || cpf.length !== 11 || cpf.match(/^([0-9])\1{10}$/g)) {
    return false;
  }

  let numbers = cpf.substr(0, 9);
  numbers += calcDigit(numbers);
  numbers += calcDigit(numbers);

  return numbers.substr(-2) === cpf.substr(-2);
};

export default validateCPF;
