import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

// páginas
import { HomePage } from '@/app/pages/HomePage';
import { ActivitiesIndex } from '@/app/pages/ActivitiesIndex';
import { ActivityPage } from '@/app/pages/ActivityPage';
import { ProjectsIndex } from '@/app/pages/ProjectsIndex';
import { ProjectPage } from '@/app/pages/ProjectsPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-[#0a0a0a] text-[#d4a574] overflow-x-hidden">
        <div className="relative z-10">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/actividades" element={<ActivitiesIndex />} />
            <Route path="/actividades/:id" element={<ActivityPage />} />
            <Route path="/proyectos" element={<ProjectsIndex />} />
            <Route path="/proyectos/:id" element={<ProjectPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}