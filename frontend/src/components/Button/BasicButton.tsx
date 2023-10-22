import './BasicButton.css';

interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick: () => void;
}

export const BasicButton = ({
  text,
  handleClick,
  ...props
}: BasicButtonProps) => {
  return (
    <button onClick={handleClick} className="basic-button" {...props}>
      {text}
    </button>
  );
};
