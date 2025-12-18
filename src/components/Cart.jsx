import './Cart.css';

export default function Cart({items, total, onRemove, onUpdateQuantity }) {
    return (
        <div className='cart-container'>
            <h2> Mon Panier</h2>

            {items.length === 0 ? (
                <p className='emplty-card'>Votre panier est vide.</p>
            ) : (
                <>
                    <div className='cart-items'>
                        {items.map(item => (
                            <div key={item.id} className='cart-item'>
                                <div className='cart-item-info'>
                                    <h3>{item.title}</h3>
                                    <p>{item.date} - {item.location}</p>
                                    <p className='price'>{item.price} € par billet </p>
                                </div>
                                <div className='cart-item-quantity'>
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity -1)}>-</button>
                                    <input 
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                                    />
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <div className='cart-item-total'>
                                    <p>{item.quantity * item.price} €</p>
                                    <button 
                                        className='remove-btn'
                                        onClick={() => onRemove(item.id)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cart-summary'>
                        <h3>Total: {total} €</h3>
                        <button className='checkout-btn'>Passer à la caisse</button>
                    </div>
                </>
            )}
        </div>
    );
} 