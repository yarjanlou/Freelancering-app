import { HiX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="fixed left-0 top-0 z-40 h-screen w-full bg-secondary-800 bg-opacity-30 backdrop-blur-sm">
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100vh-4rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-secondary-0 p-4 shadow-md transition-all duration-500 md:max-w-lg"
        >
          <div className="mb-6 flex items-center justify-between border-b border-b-secondary-300 pb-3">
            <p className="text-base font-bold text-secondary-900">{title}</p>
            <button onClick={onClose}>
              <HiX className="h-4 w-4 text-red-800" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
