import React, { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, className = "", onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 z-10 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
