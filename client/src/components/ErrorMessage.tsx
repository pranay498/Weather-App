import { FiAlertCircle } from "react-icons/fi";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="animate-fadeIn rounded-3xl bg-rose-50/90 p-5 text-rose-900 shadow-lg ring-1 ring-rose-100 backdrop-blur">
    <div className="flex items-start gap-3">
      <FiAlertCircle className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
      <div>
        <h2 className="font-bold">Weather search failed</h2>
        <p className="mt-1 text-sm text-rose-800">{message}</p>
      </div>
    </div>
  </div>
);

export default ErrorMessage;
