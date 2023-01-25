/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-unused-vars */
export as namespace containersProps;

interface PropsLogin {
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface PropsHome {}

interface PropsPartnerDetails {}
