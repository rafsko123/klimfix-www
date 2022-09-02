export interface ButtonType {
  to?: string;
  type?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
  onPress?: () => void;
  state?: any;
}
