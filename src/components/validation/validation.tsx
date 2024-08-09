import './validation.css';

export type ValidationProps = {
    errors: string[],
    className: string
}

export function Validation ({ errors, className }: ValidationProps): JSX.Element {
    
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
        <section className={ className } data-cy='validation'>
            {( errors.length > 0) ? displayErrors(): null }
        </section>
    )
}