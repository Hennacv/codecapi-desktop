import { ButtonVariants } from "./button-styles.css";

interface ButtonProps {
	text: string;
  type: 'button' | 'submit' | 'reset';
	variant: keyof typeof ButtonVariants;
	disabled?: boolean;
  onClick: () => void;
}

const Button = ({text, type, variant, disabled, onClick}: ButtonProps) => {
	return (
		<button 
			className={ButtonVariants[variant]}
			type={type} 
			disabled={disabled} 
			onClick={onClick}
		>
		{text}
		</button>
	);
}

export default Button;