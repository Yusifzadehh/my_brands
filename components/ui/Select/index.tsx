interface SelectProps {
  options: Array<string | number>;
}

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <select className="select select-bordered w-full">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
