import '../css/Card.css';

export default function Card({title, price, location, image}){
    return(
        <div className="card-item">
            <img src={image} alt={image} className="image-card" />
            <div className="body-card">
                <h3 className="title">{title}</h3>
                <h3 className="location">{location}</h3>
                <h3 className="price">{price}</h3>
            </div>
        </div>
    )
}