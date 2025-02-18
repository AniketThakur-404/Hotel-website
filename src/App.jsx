import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Offers from './components/Offers';
import Explore from './components/Explore';
import Brands from './components/Brands';
import Dining from './components/Dining';
import Events from './components/Events';
import NewestLaunches from './components/NewestLaunches';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="relative">
        <Hero />
        <Stats />
        <Offers />
        <Explore />
        <Brands />
        <Dining />
        <Events />
        <NewestLaunches />
      </main>
      <Footer />
    </div>
  );
}

export default App;