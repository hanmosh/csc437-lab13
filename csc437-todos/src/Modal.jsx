import { useRef } from "react";

function Modal(props) {
  const dialogRef = useRef(null);

  if (!props.isOpen) {
    return null;
  }

  function handleOverlayClick(event) {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      props.onCloseRequested();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div ref={dialogRef} className="rounded bg-white p-4 shadow-lg">
        <div className="mb-3 flex items-center justify-between">
          <span>{props.headerLabel}</span>
          <button
            aria-label="Close"
            type="button"
            className="text-gray-500"
            onClick={props.onCloseRequested}
          >
            X
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
