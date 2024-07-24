export default function DaysOfTheWeek (): JSX.Element {
    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
        "Saturday"
    ]

    return (
        <section className="grid grid-cols-7">
            { daysOfWeek.map((dayName) => (
                <div 
                    key={ dayName }
                    data-cy={ `${dayName}` }
                    className="border border-border border-solid border-gray-200 text-center">
                    { dayName }
                </div> 
            ))}        
        </section>
    )
}