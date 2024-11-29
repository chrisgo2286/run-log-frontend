export type TextAreaProps = {
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

    const baseClassName = "hover:bg-gray-200 hover:cursor-pointer p-1 tracking-tight text-xs"
    function handleChange (event: React.ChangeEvent<HTMLTextAreaElement>): void {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    function handleClassName (): string {
        if (className) {
            return `${ baseClassName } ${ className }`;
        }
        return baseClassName;
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