export default function CalendarHeader ({ monthName }) {
    return (
        <section className="h-40 px-5 flex justify-between items-center bg-green-100 rounded-t-xl">
            <i>Previous Month</i>
            <p className="text-4xl font-bold">{ monthName }</p>
            <i>Next Month</i>
        </section>
    )
}