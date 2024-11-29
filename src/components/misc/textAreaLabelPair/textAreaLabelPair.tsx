import TextArea, { TextAreaProps } from "../textarea/textarea";

type TextAreaLabelPairProps = TextAreaProps & {
    label: string
}
export default function TextAreaLabelPair ({
    className,
    name,
    value,
    fields,
    setFields,
    placeholder,
    dataCy,
    label
}: TextAreaLabelPairProps): JSX.Element {

    return (
        <div className="grid grid-rows-6 h-16 w-80">
            <span className="row-span-2 border border-gray-500 rounded-t-md text-xs text-center">{ label }</span>
            <TextArea
                className="row-span-4 border-b border-l border-r border-gray-500 rounded-b-md leading-none"
                name={ name }
                value={ value }
                fields={ fields }
                setFields={ setFields }
                placeholder={ placeholder }
                dataCy={ dataCy } />
        </div>
    )
}