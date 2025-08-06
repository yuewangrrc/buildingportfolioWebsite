export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  backgroundColor?: string;
}
