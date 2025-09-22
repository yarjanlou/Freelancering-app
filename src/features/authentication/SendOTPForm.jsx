import InputField from "../../ui/InputField";
import Loader from "../../ui/Loader";

function SendOtpForm({ register, onSubmit, isSendingOtp }) {
  return (
    <div>
      <form className="space-y-6" onSubmit={onSubmit}>
        <InputField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
        />
        <div>
          {isSendingOtp ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOtpForm;
