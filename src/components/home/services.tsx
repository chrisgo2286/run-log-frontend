import { Link } from 'react-router-dom';
import Card from "../misc/card/card";

export default function Services (): JSX.Element {
    return (
        <section className="services">
            <div className="text-2xl my-10 font-bold text-center">Benefits</div>
            <div className="flex flex-wrap justify-center">
                <Card 
                    headlineText="Create A Plan"
                    detailText={
                        "Schedule your training plan based on your goal race " +
                        "and add each run for the training period."
                    }
                    link={<Link to='/registration'>Discover more</Link>} />
                <Card 
                    headlineText="Track Your Progress"
                    detailText={
                        "Upload your training data straight from your GPS " +
                        "or enter your runs manually. Add notes for each run " +
                        "to track how you felt, your thoughts, etc."
                    }
                    link={<Link to='/registration'>Discover more</Link>} />
                <Card 
                    headlineText="Review Your Training Period"
                    detailText={
                        "Review your training period after your goal race. " +
                        "Review detailed stats and charts about your running " +
                        "to improve your training."
                    }
                    link={<Link to='/registration'>Discover more</Link>} />
            </div>
        </section>
    )
}