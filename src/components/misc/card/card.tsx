import { CardFooterProp, CardProps, CardSectionProp } from "../miscCompTypes";
import './card.css';

export default function Card ({ 
    headlineText, 
    detailText, 
    link 
}: CardProps) {
    return (
        <div className="card">
            <CardHeader
                text={ headlineText } />
            <CardDetail
                text={ detailText } />
            <CardFooter
                link={ link } />    
        </div>
    )
}

function CardHeader ({ text }: CardSectionProp) {
    return (
        <div className="card-headline">{ text }</div>
    )
}

function CardDetail ({ text }: CardSectionProp) {
    return (
        <div className="card-detail">{ text }</div>
    )
}

function CardFooter ({ link }: CardFooterProp) {
    return (
        <div className="card-footer">
            { link }
        </div>
    )
}