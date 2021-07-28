import React from 'react';

interface ButtonProps {
  value?: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
  children?: string;
  className?: string;
}

const Button = ({ onClick, type, value, children, className }: ButtonProps) => {
  return (
    <div className="app">
      <button className={className} onClick={onClick} type={type} value={value}>
        {children}
      </button>
    </div>
  );
};

export default Button;
