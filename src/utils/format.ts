/* eslint-disable @typescript-eslint/no-explicit-any */
export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const formatBornAt = (bornAt: string) => {
  try {
    let formattedBornAt;
    formattedBornAt = bornAt.split("-");
    formattedBornAt = `${formattedBornAt[2]}/${formattedBornAt[1]}/${formattedBornAt[0]}`;
    return formattedBornAt;
  } catch {
    return "";
  }
};

export const formatCNPJ = (CNPJ: string) => {
  try {
    return CNPJ.replace(/\D+/g, "").replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  } catch {
    return "";
  }
};

export const formatCPF = (CPF: string) => {
  return CPF?.replace(/\D+/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const formatCellPhone = (cellPhone: string) => {
  try {
    return cellPhone
      .replace("+55", "")
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } catch {
    return "";
  }
};

export const formatMoney = (value: string) => {
  if (value?.length > 4) {
    return value?.substr(0, 2);
  } else {
    return value?.substr(0, 1);
  }
};

export const formatUrlVimeo = (url: string) => {
  return url?.replace("//vimeo.com/", "//player.vimeo.com/video/");
};

// eslint-disable-next-line no-unused-vars
export const handleChangeInputWithMaxLength = (
  event: { target: { value: any; maxLength: any } },
  functionUpdateValue: (arg0: any) => void
) => {
  const { value, maxLength } = event.target;
  if (String(value).length <= maxLength) {
    functionUpdateValue(value);
  }
};

// eslint-disable-next-line no-unused-vars
export const makeUpdateValueWithKey = (
  key: any,
  funcUpdate: (arg0: any, arg1: any) => void
) => {
  return (value: any) => {
    funcUpdate(key, value);
  };
};
