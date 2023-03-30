import {ReactNode} from "react";


export interface ButtonType {
  to?: string;
  type?: string;
  href?: string;
  anchor?: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
  onPress?: () => void;
  state?: any;
  children: ReactNode
  title?: string;
}
