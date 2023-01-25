const checkPasswordQuality = (password = "") => {
  const medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/g;
  const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;

  if (typeof password !== "string") {
    return "senha inválida";
  }

  if (strong.test(password)) {
    return "Forte";
  }

  if (medium.test(password)) {
    return "Média";
  }

  return "Fraca";
};

export default checkPasswordQuality;
