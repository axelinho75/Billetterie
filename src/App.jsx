import { useState } from 'react';
import Header from './components/Header';
import MatchList from './components/MatchList';
import Cart from './components/Cart';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const matches = [
    {
      id: 1,
      title: "PSG vs Marseille",
      date: "25 Dec 2025",
      time: "20:00",
      location: "Parc des Princes",
      price: 45,
      image: "https://via.placeholder.com/400x250?text=PSG+vs+Marseille",
      seats: 50
    },
    {
      id: 2,
      title: "PSG vs Lyon",
      date: "28 Dec 2025",
      time: "19:00",
      location: "Parc des Princes",
      price: 55,
      image: "https://via.placeholder.com/400x250?text=PSG+vs+Lyon",
      seats: 30
    },
    {
      id: 3,
      title: "PSG vs Nice",
      date: "02 Jan 2026",
      time: "15:00",
      location: "Parc des Princes",
      price: 35,
      image: "https://via.placeholder.com/400x250?text=PSG+vs+Nice",
      seats: 75
    },
    {
      id: 4,
      title: "PSG vs Lens",
      date: "05 Jan 2026",
      time: "20:00",
      location: "Parc des Princes",
      price: 50,
      image: "https://via.placeholder.com/400x250?text=PSG+vs+Lens",
      seats: 40
    }
  ];

  const addToCart = (match, quantity) => {
    const existingItem = cart.find(item => item.id === match.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === match.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...match, quantity }]);
    }
  };

  const removeFromCart = (matchId) => {
    setCart(cart.filter(item => item.id !== matchId));
  };

  const updateQuantity = (matchId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(matchId);
    } else {
      setCart(cart.map(item =>
        item.id === matchId ? { ...item, quantity } : item
      ));
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className='app'>
      <Header
      cartCount={cart.length}
      onCartClick={() => setShowCart(!showCart)}
      isCartOpen={showCart}
      />

      <main className='main-content'>
        {showCart ? (
          <Cart 
            items={cart}
            total={cartTotal}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ) : (
          <MatchList
            matches={matches}
            onAddToCart={addToCart}
          />
        )}
      </main>
    </div>
  );
}

export default App;

