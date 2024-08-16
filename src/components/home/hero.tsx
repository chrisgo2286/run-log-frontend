import { useNavigate } from 'react-router-dom';
import heroImage from "../../assets/hero.jpg";

export default function Hero () {
    const navigate = useNavigate();

    return (
        <section 
            className="h-140 bg-cover bg-right"
            style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="pt-10 pl-10">
                <div className="text-5xl font-bold text-white">Running has never been easier.</div>
                <div className="text-xl text-black-100 mt-4 mb-4">Create a Plan. Track Your Progress. Run Faster.</div>
                <button 
                    className="button w-28 h-10 ml-32 text-xl text-white font-bold border border-gray-500 rounded-md bg-blue-200 hover:bg-blue-300"
                    onClick={() => navigate('/registration')}>    
                    Register
                </button>
            </div>
        </section>
    )
}