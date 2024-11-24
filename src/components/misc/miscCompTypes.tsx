export type SelectProps = {
    className?: string;
    name: string;
    initial: string;
    options: string[];
    fields: object;
    setFields: React.Dispatch<React.SetStateAction<any>>;
}

export type CardProps = {
    headlineText: string,
    detailText: string,
    link: JSX.Element
}

export type CardSectionProp = {
    text: string
}

export type CardFooterProp = {
    link: JSX.Element
}