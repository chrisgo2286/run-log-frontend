import './validation.css';

export type ValidationType = {
    errors: string[]
}

export function Validation ({ errors }: ValidationType): JSX.Element {
    
    function displayErrors (): JSX.Element[] | JSX.Element {
        if (errors) {
            return errors.map((error, ndx) => (
                <div key={ ndx } className="validation-error">{ error }</div>
            ));
        } else {
            return <></> 
        }
    }

    return (
        <section className="validation" data-cy='validation'>
            {( errors.length > 0) ? displayErrors(): null }
        </section>
    )
}