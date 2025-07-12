"use client";
interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  checked?: boolean;
  max?: string;
  classNames?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  ref,
  checked,
  max,
  classNames,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`border-blue-dark/15 input bg-white ${classNames}`}
      onBlur={onBlur}
      ref={ref}
      checked={checked}
      max={max}
    />
  );
};

export default Input;
