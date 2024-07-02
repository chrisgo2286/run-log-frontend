export default function DaysOfTheWeek () {
    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
        "Saturday"
    ]

    return (
        <section className="grid grid-cols-7">
            { daysOfWeek.map((dayName) => (
                <div className="border border-border border-solid border-gray-200 text-center">
                    { dayName }
                </div> 
            ))}        
        </section>
    )
}