type ButtonProps = {
  className?: string;
  type?: 'button' | 'submit';
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ className, type, value, onClick }) => {
  return (
    <button className={className} type={type} value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
