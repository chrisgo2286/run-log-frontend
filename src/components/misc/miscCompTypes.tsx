export type InputProps = {
    className: string;
    type: string;
    name: string;
    value: string | number;
    fields: object;
    setFields: React.Dispatch<React.SetStateAction<{}>>;
}

export type InputWithIconProps = InputProps & {
    icon: string;
    placeholder: string;
}

export type SelectProps = {
    className?: string;
    name: string;
    initial: string;
    options: string[];
    fields: object;
    setFields: React.Dispatch<React.SetStateAction<{}>>;
}

export type TextAreaProps = {
    className: string;
    name: string;
    value: string | number;
    fields: object;
    setFields: React.Dispatch<React.SetStateAction<{}>>;
}