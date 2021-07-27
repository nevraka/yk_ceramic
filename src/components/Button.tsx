import React from 'react';

interface ButtonProps {
  value: string;
  onClick: (v: string) => void;
  placeholder: string;
  label: string;
  disabled: boolean;
  loading: boolean;
  type: 'submit' | 'button';
  classNames: string;
}

const Button = ({ placeholder }: ButtonProps) => {
  return (
    <div className="app">
      <button>{placeholder}</button>
    </div>
  );
};

export default Button;
