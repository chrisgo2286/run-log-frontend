import './input.css';

export default function Input ({ 
    className, 
    type, 
    name, 
    value, 
    fields, 
    setFields, 
    ...other }) {
    
    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    function handleClassName () {
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
            data-cy={ className }
            { ...other }>
        </input>
    )
}