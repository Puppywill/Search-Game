export function Input({ type = "text", className, ...props }) {
    return (
      <input
        type={type}
        className={`border border-gray-300 rounded-lg p-2 ${className}`}
        {...props}
      />
    );
  }
  