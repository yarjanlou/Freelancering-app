import RadioInput from "./RadioInput";

function RadioInputGroup({
  register,
  watch,
  errors,
  configs: { name, validationSchema = {}, options },
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-14">
        {options.map(({ value, label }) => (
          <RadioInput
            key={value}
            name={name}
            label={label}
            value={value}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="block text-sm text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
