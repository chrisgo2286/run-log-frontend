import { LinkProps } from "react-router-dom";
import { HTMLProps } from "react";

export type InputProps = {
    className: string,
    type: string,
    name: string,
    value: string | number,
    fields: object,
    setFields: React.Dispatch<React.SetStateAction<any>>,
    placeholder?: string
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
    setFields: React.Dispatch<React.SetStateAction<any>>;
}

export type TextAreaProps = {
    className: string;
    name: string;
    value: string | number;
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