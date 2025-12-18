import './Header.css';

export default function Header({ cartCount, onCartClick, isCartOpen }) {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <h1>PSG Billetterie</h1>
                </div>
                <button
                className={`cart-btn ${isCartOpen ? 'active' : ''}`}
                onClick={onCartClick}
                >
                    🛒 Panier ({cartCount})
                </button>
            </div>
        </header>
    );
}