import { InputProps } from '../input/input';
import './inputWithIcon.css';

export type InputWithIconProps = InputProps & {
    icon: string;
    placeholder: string;
}

export default function InputWithIcon ({ 
    className,
    type, 
    name, 
    value, 
    fields, 
    setFields,
    icon,
    placeholder, 
    ...other }: InputWithIconProps) {
    
    function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    return (
        <div className={ "input-icon-pair " + className }>
            <i className="material-icons icon">{ icon }</i>
            <input
                className="input" 
                type={ type }
                name={ name }
                placeholder={ placeholder }
                value={ value }
                id={ name }
                onChange={ handleChange }
                { ...other }>
            </input>
        </div>

    )
}