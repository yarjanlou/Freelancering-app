import { HiArrowCircleRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveback";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="flex justify-center pt-20 sm:max-w-sm">
      <div>
        <h1 className="mb-8 text-xl font-bold text-secondary-700">
          صفحه ای که دنبالش بودید ، یافت نشد.
        </h1>
        <button
          className="flex items-center justify-center gap-x-2 rounded-md bg-primary-700 px-5 py-1.5 text-white"
          onClick={moveBack}
        >
          <HiArrowCircleRight className="h-5 w-5" />
          <span className="font-bold">بازگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
