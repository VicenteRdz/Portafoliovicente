import { HashRouter, Routes, Route } from 'react-router-dom';import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

// páginas
import { HomePage } from '@/app/pages/HomePage';
import { ActivitiesIndex } from '@/app/pages/ActivitiesIndex';
import { ActivityPage } from '@/app/pages/ActivityPage';
import { ProjectsIndex } from '@/app/pages/ProjectsIndex';
import { ProjectPage } from '@/app/pages/ProjectsPage';
import { HallOfFameIndex } from '@/app/pages/HallOfFameIndex';
import { HallOfFamePage } from '@/app/pages/HallOfFamePage';
import { SqlInjectionIndex } from '@/app/pages/SqlInjectionIndex';
import { SqlInjectionLabPage } from '@/app/pages/SqlInjectionLabPage';
import { PD02PlatformsPage } from '@/app/pages/pd02/PD02PlatformsPage';
import { PD02QuizIndex } from '@/app/pages/pd02/PD02QuizIndex';
import { PD02QuizPage } from '@/app/pages/pd02/PD02QuizPage';
import { PD02ResultsPage } from '@/app/pages/pd02/PD02ResultsPage';
import { CertificationsIndex } from '@/app/pages/certifications/CertificationsIndex';
import { CertificationsPage } from '@/app/pages/certifications/CertificationsPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0a0a0a] text-[#d4a574] overflow-x-hidden">
        <div className="relative z-10">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/actividades" element={<ActivitiesIndex />} />
            <Route path="/actividades/:id" element={<ActivityPage />} />
            <Route path="/proyectos" element={<ProjectsIndex />} />
            <Route path="/proyectos/:id" element={<ProjectPage />} />
            <Route path="/hall-of-fame" element={<HallOfFameIndex />} />
            <Route path="/hall-of-fame/:id" element={<HallOfFamePage />} />
            <Route path="/hall-of-fame/sql-injection/labs" element={<SqlInjectionIndex />} />
            <Route path="/hall-of-fame/sql-injection/labs/:id" element={<SqlInjectionLabPage />} />
            <Route path="/proyectos/proj-02/fase-1" element={<PD02PlatformsPage />} />
            <Route path="/proyectos/proj-02/fase-2" element={<PD02QuizIndex />} />
            <Route path="/proyectos/proj-02/fase-2/escenario/:id" element={<PD02QuizPage />} />
            <Route path="/proyectos/proj-02/resultados" element={<PD02ResultsPage />} />
            <Route path="/certificaciones" element={<CertificationsIndex />} />
            <Route path="/certificaciones/:id" element={<CertificationsPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}