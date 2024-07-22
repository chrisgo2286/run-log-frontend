import { TextAreaProps } from "../miscCompTypes"

export default function TextArea ({
    className,
    name,
    value,
    fields,
    setFields,
    ...other }: TextAreaProps) {

    function handleChange (event: React.ChangeEvent<HTMLTextAreaElement>): void {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    function handleClassName (): string {
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