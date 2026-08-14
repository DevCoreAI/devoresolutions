import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Home() {
    const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <Navigation />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Contact />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            {currentYear} DevCore Solutions LLC. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Women-Owned Small Business (WOSB) & Economically Disadvantaged Women-Owned Small Business (EDWOSB)
          </p>
        </div>
      </footer>
    </div>
  );
}
