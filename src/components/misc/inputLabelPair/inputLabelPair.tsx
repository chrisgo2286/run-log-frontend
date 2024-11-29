import { InputProps } from "../input/input"
import Input from "../input/input"

type InputLabelPairProps = InputProps & {
    label: string
}

export default function InputLabelPair ({
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
    label,
}: InputLabelPairProps): JSX.Element {
    const baseClassName = "grid grid-cols-6 h-8 w-60"
    return (
        <div className={ `${baseClassName} ${className}` }>
            <span className="border border-gray-500 rounded-l-md col-span-2 text-center text-xs leading-8">{ label }</span>
            <Input
                className="col-span-4 w-full border-t border-r border-b border-gray-500 rounded-r-md text-xs"
                type={ type }
                name={ name }
                value={ value }
                fields={ fields }
                setFields={ setFields }
                onFocus={ onFocus }
                onBlur={ onBlur }
                placeholder={ placeholder }
                dataCy={ dataCy } />
        </div>
    )    
}