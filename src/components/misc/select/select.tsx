import { useState, useEffect } from 'react';
import { SelectProps } from '../miscCompTypes';
import './select.css';

export default function Select ({
    className,
    name,
    initial,
    options,
    fields,
    setFields,
    ...other }: SelectProps) {
    
    const [ choice, setChoice ] = useState<string>();

    useEffect(() => {
        setChoice(initial)
    }, [initial])

    function handleChange (event: React.ChangeEvent<HTMLSelectElement>): void {
        const { name, value } = event.target;
        setChoice(value);
        setFields({ ...fields, [name]: value });
    }

    return (
        <select
            className={ className }
            name={ name }
            value={ choice }
            onChange={ handleChange }
            data-cy={ className }
            { ...other }>
            <option key={ initial } value={ initial }>{ initial }</option>
            {
                options.filter((option) => option !== initial).map((option) => (
                    <option key={ option } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}