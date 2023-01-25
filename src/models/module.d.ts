/* eslint-disable no-unused-vars */
declare module "lodash/throttle";
declare module "react-shimmer-effect";
declare module "react-copy-to-clipboard";
export as namespace models;

interface ParamsToggleProfile {
  idStudentClass: string;
}

interface ParamsLogin {
  user: string;
  password: string;
}

interface ParamsRestorePassword {
  password?: string;
  passwordConfirm?: string;
}

interface ParamsRegister {
  name?: string;
  phone?: string;
  office?: string;
  iam?: string;
  companyName?: string;
  site?: string;
  cnpj?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface ILogin {
  errorEmail?: string;
  errorPassword?: string;
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface IConstants {
  backUrl?: string;
}
