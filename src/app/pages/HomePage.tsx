import { Hero } from '@/app/components/Hero';
import { Presentation } from '@/app/components/Presentation';
import { Profile } from '@/app/components/Profile';
import { TechnicalInfo } from '@/app/components/TechnicalInfo';
import { ContactForm } from '@/app/components/ContactForm';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Presentation />
      <Profile />
      <TechnicalInfo />
      <ContactForm />
    </main>
  );
}