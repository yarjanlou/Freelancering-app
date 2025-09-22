function Select({ value, onChange, options }) {
  return (
    <select
      className="text-input form-select w-48 bg-secondary-0 bg-[left_0.5rem_center] text-xs font-bold"
      value={value}
      onChange={onChange}
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
