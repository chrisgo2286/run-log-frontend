import Select, { SelectProps } from "../select/select"

type SelectLabelPairProps = SelectProps & {
    label: string
}

export default function SelectLabelPair ({
    className,
    name,
    initial,
    options,
    fields,
    setFields,
    dataCy,
    label
}: SelectLabelPairProps): JSX.Element {
    const baseClassName = "grid grid-cols-6 h-8 w-60"
    return (
        <div className={ `${baseClassName} ${className}` }>
            <span className="border border-gray-500 rounded-l-md col-span-2 text-center text-xs leading-8">
                { label }
            </span>
            <Select 
                className="col-span-4 w-full border-t border-r border-b border-gray-500 rounded-r-md text-xs hover:bg-gray-200 hover:cursor-pointer"
                name={ name }
                initial={ initial }
                options={ options }
                fields={ fields }
                setFields={ setFields }
                dataCy={ dataCy } />
        </div>
    )
}