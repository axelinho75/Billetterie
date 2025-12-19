import '../css/Card.css';
import defaultImage from '../assets/image.png';

export default function Card({title, price, location, image}){
    const src = image || defaultImage;

    return(
        <div className="card-item">
            <img
                src={src}
                alt={title || 'card image'}
                className="image-card"
                onError={(e) => { e.currentTarget.src = defaultImage; }}
            />
            <div className="body-card">
                <h3 className="title">{title}</h3>
                <h3 className="location">{location}</h3>
                <h3 className="price">{price}</h3>
            </div>
        </div>
    )
}