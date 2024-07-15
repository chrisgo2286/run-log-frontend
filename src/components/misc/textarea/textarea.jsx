export default function TextArea ({
    className,
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
            return "textarea " + className;
        }
        return "textarea ";
    }

    return (
        <textarea
            className={ handleClassName() }
            name={ name}
            value={ value }
            id={ name }
            onChange={ handleChange }
            data-cy={ className }
            { ...other }>
        </textarea>
    )
}