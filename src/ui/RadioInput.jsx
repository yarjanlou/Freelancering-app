function RadioInput({ name, label, value, register, watch, validationSchema }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="form-radio cursor-pointer border-2 border-primary-700 bg-secondary-0 text-primary-800 focus:ring-0 focus:ring-offset-secondary-0"
        type="radio"
        id={value}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioInput;
