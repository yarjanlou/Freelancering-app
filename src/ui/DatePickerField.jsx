import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ date, setDate, label }) {
  return (
    <div>
      <span className="mb-2 block text-secondary-800">{label}</span>
      <DatePicker
        value={date}
        onChange={setDate}
        calendar={persian}
        locale={persian_fa}
        containerClassName="w-full"
        inputClass="text-input"
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default DatePickerField;
