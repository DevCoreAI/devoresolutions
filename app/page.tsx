import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {currentYear} DevCore Solutions LLC. All rights reserved.</p>
          <p>WOSB · EDWOSB · Maryland Registered · SAM.gov Active</p>
        </div>
      </footer>
    </div>
  );
}
