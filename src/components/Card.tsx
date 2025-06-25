import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
        <h3 className="text-xl font-bold text-green-400">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Card;
