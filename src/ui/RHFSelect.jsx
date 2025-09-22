function RHFSelect({ label, name, options = [], register, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-800">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        className="text-input form-select bg-[left_0.5rem_center]"
        id={name}
        {...register(name)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
