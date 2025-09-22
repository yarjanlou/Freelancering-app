import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import Loader from "../../ui/Loader";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        toast.error("پروفایل شما در انتظار برسی است");
        navigate("/");
        return;
      }
      // if (user.role === "OWNER") return navigate("/owner");
      // if (user.role === "FREELANCER") return navigate("/freelancer");
      // if (user.role === "ADMIN") return navigate("/admin");
      return navigate(`/${user.role.toLowerCase()}`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const intervalId =
      time > 0 && setInterval(() => setTime((time) => time - 1), 1000);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [time, otpResponse]);

  return (
    <div>
      <button>
        <HiArrowCircleRight
          className="mb-4 h-6 w-6 text-primary-800"
          onClick={onBack}
        />
      </button>
      {otpResponse && (
        <div className="mb-4 flex items-center gap-x-2 text-sm">
          <p>{otpResponse.message}</p>
          <button onClick={onBack}>
            <TbEdit className="text-lg" />
          </button>
        </div>
      )}
      <div className="mb-4 text-sm text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا اجرای مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد</button>
        )}
      </div>
      <form className="space-y-8" onSubmit={handleCheckOtp}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle="!w-10 px-0.5 py-2 border border-primary-300 rounded-lg bg-secondary-50 text-secondary-900"
          inputType="tel"
          shouldAutoFocus={true}
        />
        <div>
          {isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
