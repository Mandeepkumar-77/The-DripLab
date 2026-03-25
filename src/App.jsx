import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import LandingPage from './pages/LandingPage';
import BuilderPage from './pages/BuilderPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SplashPage from './pages/SplashPage';

function App() {
  const [currentPath, setCurrentPath] = useState('splash');
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const navigateTo = (path) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: (i.qty || 1) + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev.find(i => i.id === id);
      if (existing && existing.qty > 1) {
        return prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i);
      }
      return prev.filter(i => i.id !== id);
    });
  };

  const clearCart = () => setCart([]);

  const handleLogin = (userData) => {
    setUser(userData);
    if (cart.length > 0) {
      navigateTo('checkout');
    } else {
      navigateTo('home');
    }
  };

  const handleUpdateProfile = (newDetails) => {
    setUser((prev) => ({ ...prev, ...newDetails }));
    navigateTo('home');
  };

  const handleLogout = () => {
    setUser(null);
    navigateTo('login');
  };

  // Pages that hide the Header and BottomNav
  const hideNavigation = currentPath === 'login' || currentPath === 'success' || currentPath === 'splash';

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <div className="app-container">
      {!hideNavigation && <Header cartCount={cartCount} navigateTo={navigateTo} user={user} />}
      
      <main className="main-content">
        {currentPath === 'splash' && <SplashPage navigateTo={navigateTo} />}
        {currentPath === 'login' && <LoginPage onLogin={handleLogin} />}
        {currentPath === 'profile' && <ProfilePage user={user} onUpdate={handleUpdateProfile} onLogout={handleLogout} />}
        {currentPath === 'home' && <LandingPage navigateTo={navigateTo} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />}
        {currentPath === 'builder' && <BuilderPage navigateTo={navigateTo} addToCart={addToCart} />}
        {currentPath === 'checkout' && <CheckoutPage navigateTo={navigateTo} cart={cart} clearCart={clearCart} user={user} />}
        {currentPath === 'success' && <SuccessPage navigateTo={navigateTo} />}
      </main>

      {!hideNavigation && <BottomNav currentPath={currentPath} navigateTo={navigateTo} />}
    </div>
  );
}

export default App;
