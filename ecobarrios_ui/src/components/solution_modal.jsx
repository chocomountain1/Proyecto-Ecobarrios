import { createPortal } from "react-dom";
import "../styles/components/modal/modal_solution.css";


export default function SolutionModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>,
    document.body
  );
}
