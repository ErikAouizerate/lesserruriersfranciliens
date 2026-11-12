import { Route, Routes } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollReveal } from '@/components/ScrollReveal';
import { HeadManager } from '@/components/HeadManager';
import Home from '@/pages/Home';
import Entreprise from '@/pages/Entreprise';
import Competences from '@/pages/Competences';
import Professionnels from '@/pages/Professionnels';
import Realisations from '@/pages/Realisations';
import Zones from '@/pages/Zones';
import Contact from '@/pages/Contact';
import MentionsLegales from '@/pages/MentionsLegales';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <HeadManager />
      <a
        href="#contenu"
        className="sr-only z-[60] rounded-md bg-brand px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/professionnels" element={<Professionnels />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/zones-intervention" element={<Zones />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
