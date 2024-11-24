import './input.css';

export type InputProps = {
    className: string,
    type: string,
    name: string,
    value: string | number,
    fields: object,
    setFields: React.Dispatch<React.SetStateAction<any>>,
    onFocus?: () => void,
    onBlur?: () => void,
    placeholder?: string,
    dataCy?: string
}

export default function Input ({ 
    className, 
    type, 
    name, 
    value, 
    fields, 
    setFields,
    onFocus,
    onBlur,
    placeholder,
    dataCy,
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
            onFocus={ onFocus }
            onBlur={ onBlur }
            placeholder={ placeholder }
            data-cy={ dataCy }
            { ...other }>
        </input>
    )
}