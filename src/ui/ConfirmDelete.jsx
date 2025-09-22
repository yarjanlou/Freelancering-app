function ConfirmDelete({ resourceName, disabled, onClose, onConfirm }) {
  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="font-semibold">آیا از حذف {resourceName} مطمئنید ؟</h2>
      <div className="flex items-center gap-x-4">
        <button
          className="btn btn--primary flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          className="btn btn--danger flex-1"
          onClick={onConfirm}
          disabled={disabled}
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
