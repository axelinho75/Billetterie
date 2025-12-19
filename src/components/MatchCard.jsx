import { useState } from "react";
import './MatchCard.css';
import defaultImage from '../assets/image.png';

export default function MatchCard({ match, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0 && quantity <= match.seats) {
            onAddToCart(match, quantity);
            setQuantity(1);
        }
    };

    const src = match.image || defaultImage;

    return (
        <div className="match-card">
            <img
                src={src}
                alt={match.title || 'match image'}
                className="match-image"
                onError={(e) => { e.currentTarget.src = defaultImage; }}
            />
            <div className="match-content">
                <h2 className="match-title">{match.title}</h2>
                <p className="match-date">{match.date} à {match.time}</p>
                <p className="match-location">{match.location}</p>
                <div className="match-footer">
                    <span className="match-price">{match.price} €</span>
                    <span className="match-seats">places: {match.seats}</span>
                </div>
                <div className="quantity-selector">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <input 
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.min(match.seats, Math.max(1, parseInt(e.target.value) || 1)))}
                        min="1"
                        max={match.seats}
                    />
                    <button onClick={() => setQuantity(Math.min(match.seats, quantity + 1))}>+</button>
                </div>
                <button
                    className="add-to-cart-btn"
                    onClick={handleAddToCart}
                    disabled={match.seats === 0}
                >
                    {match.seats === 0 ? 'Complet' : 'Ajouter au panier'}
                </button>
            </div>
        </div>
    );
}

