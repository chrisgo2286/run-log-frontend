export type LoginFieldsProps = {
    fields: FieldsType;
    setFields: SetFieldsType;
    handleSubmit: () => Promise<void>;
}

export type FieldsType = {
    username: string;
    password: string;
}

type SetFieldsType = React.Dispatch<React.SetStateAction<{
    username: string;
    password: string;
}>>

