export function Card({ children, className }) {
    return (
      <div className={`border border-gray-300 shadow-md rounded-xl p-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
  }
  