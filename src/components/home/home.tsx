import Hero from "./hero";
import Services from "./services";
import Footer from "./footer";

export default function Home (): JSX.Element {
    return (
        <main>
            <Hero />
            <Services />
            <Footer />
        </main>
    )
}