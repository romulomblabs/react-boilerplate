/* eslint-disable no-unused-vars */
import { InputProps, ResponsiveValue } from "@chakra-ui/react";

export as namespace componentsProps;

interface SimpleComponent {
  [x: string]: unknown;
}

interface ComponentProp extends SimpleComponent {
  children?: React.ReactNode;
}

//ELEMENTS

interface PropsBox extends ComponentProp {
  shadow?: boolean;
}

interface PropsButton extends ComponentProp {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

interface PropsPageLoading extends SimpleComponent {
  loading?: boolean;
}

interface PropsInputPassword extends InputProps {
  label?: string;
}

//MODULES
interface PageViewProps {
  children: React.ReactNode;
}
interface PartnerProps {
  title: string;
  description: string;
  text?: string;
  urlImage: string;
  promo?: string;
  services?: string;
}

interface PartnerCardProps {
  title: string;
  description: string;
  site: string;
  urlImage: string;
  socialMedia?: string;
}

interface StepsProps {
  number: number;
  description: string;
}

interface PropsCards {
  partner: PartnerProps[];
}

interface AreasProps {
  urlImage: string;
  title: string;
  description: string;
}

interface ServiceProps {
  description: string;
}

interface PropsInputCopy {
  label?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  size?: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs">;
  height?: string | number | string[] | number[];
}

interface PropsSearch {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[];
  placeholder?: string;
}
