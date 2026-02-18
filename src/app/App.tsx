import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Activities } from '@/app/components/Activities';
import { Presentation } from '@/app/components/Presentation';
import { Profile } from '@/app/components/Profile';
import { TechnicalInfo } from '@/app/components/TechnicalInfo';
import { ContactForm } from '@/app/components/ContactForm';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4a574] overflow-x-hidden">
      {/* Background texture overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTY1LCAxMTYsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 pointer-events-none z-0"></div>
      
      {/* Gradient overlays */}
      <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#d4a574]/10 to-transparent blur-3xl pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#cc6633]/10 to-transparent blur-3xl pointer-events-none z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Presentation />
          <Profile />
          <TechnicalInfo />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
