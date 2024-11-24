import './textarea.css'

type TextAreaProps = {
    className: string;
    name: string;
    value: string | number | undefined;
    fields: object;
    setFields: React.Dispatch<React.SetStateAction<any>>
    placeholder?: string,
    dataCy?: string;
}

export default function TextArea ({
    className,
    name,
    value,
    fields,
    setFields,
    placeholder,
    dataCy,
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
            placeholder={ placeholder }
            data-cy={ dataCy }
            { ...other }>
        </textarea>
    )
}