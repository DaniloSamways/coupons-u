import './index.css'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  additional?: string;
  disabled?: boolean;
}

export default function InputText(props: InputTextProps) {
  return (
    <div className="input">
      <label htmlFor={props.label}>{props.label}</label>
      <div>
        <input
          {...props}
          id={props.label}
          type="text"
          className={props.additional && 'withAdditional'}
        />
        {props.additional && <span>{props.additional}</span>}
      </div>
    </div>
  )
}