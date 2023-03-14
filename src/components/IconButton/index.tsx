import './index.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({ children, ...props }: ButtonProps) {
  return (
    <button type='button' {...props} className="icon-button">
      {children}
    </button>
  )
}