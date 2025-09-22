function InputField({
  label,
  name,
  register,
  required,
  type = "text",
  errors,
  validationSchema = {},
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-4 block text-secondary-800">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        {...register(name, validationSchema)}
        type={type}
        autoComplete="off"
        className="text-input"
      />
      {errors && errors[name] && (
        <span className="mt-2 block text-sm text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default InputField;
