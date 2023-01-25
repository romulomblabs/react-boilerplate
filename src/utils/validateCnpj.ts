const calcDigit = (substring: string) => {
  const numbers = substring.split("").map(Number);
  let modulus = numbers.length - 7;
  const sum = numbers.reduce((acc, number) => {
    const val = acc + number * modulus;
    modulus -= 1;
    if (modulus < 2) modulus = 9;
    return val;
  }, 0);
  const mod = sum % 11;

  return mod < 2 ? 0 : 11 - mod;
};

const validateCnpj = (cnpj: string) => {
  cnpj = cnpj.replace(/\D/gi, "");
  // Elimina CNPJs invalidos conhecidos
  if (!cnpj || cnpj.length !== 14 || cnpj.match(/^([0-9])\1{13}$/g)) return false;

  let numbers = cnpj.substr(0, 12);
  numbers += calcDigit(numbers);
  numbers += calcDigit(numbers);

  return numbers.substr(-2) === cnpj.substr(-2);
};

export default validateCnpj;
