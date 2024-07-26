import { InputProps } from '../miscCompTypes';
import './input.css';

export default function Input ({ 
    className, 
    type, 
    name, 
    value, 
    fields, 
    setFields, 
    ...other }: InputProps) {
    
    function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    function handleClassName (): string {
        if (className) {
            return "input " + className;
        }
        return "input";
    }

    return (
        <input 
            className={ handleClassName() }
            type={ type }
            name={ name }
            value={ value }
            id={ name }
            onChange={ handleChange }
            { ...other }>
        </input>
    )
}