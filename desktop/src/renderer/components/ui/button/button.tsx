import { ReactNode } from 'react';
import { ButtonVariants } from './button-styles.css';

interface ButtonProps {
  text?: string;
  children?: ReactNode;
  type: 'button' | 'submit' | 'reset';
  variant: keyof typeof ButtonVariants;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  text,
  children,
  type,
  variant,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={ButtonVariants[variant]}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {!text ? children : text}
    </button>
  );
};

export default Button;
