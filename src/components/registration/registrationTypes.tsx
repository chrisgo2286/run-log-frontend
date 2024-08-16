export type RegistrationProps = {
    username: string;
    password1: string;
    password2: string;
}

export type NewUserFieldsProps = {
    fields: RegistrationProps,
    setFields: React.Dispatch<React.SetStateAction<RegistrationProps>>,
    handleSubmit: () => void
}