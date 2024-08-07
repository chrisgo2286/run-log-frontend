export type LoginFieldsProps = {
    fields: FieldsType,
    setFields: React.Dispatch<React.SetStateAction<FieldsType>>,
    handleSubmit: () => Promise<void>
}

export type FieldsType = {
    username: string;
    password: string;
}