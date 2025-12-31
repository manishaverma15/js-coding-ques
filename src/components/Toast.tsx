interface ToastProps {
  readonly type: "correct" | "wrong";
}

const Toast = ({ type }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg text-white shadow-lg transition
        ${type === "correct" ? "bg-green-600" : "bg-red-600"}`}
    >
      {type === "correct" ? "✅ Correct Answer" : "❌ Wrong Answer"}
    </div>
  );
};

export default Toast;
