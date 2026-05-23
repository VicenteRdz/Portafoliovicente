import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from '@/app/data/projects';
import { Project3Hero } from '@/app/components/project3/Project3Hero';
import { Project3SummaryCards } from '@/app/components/project3/Project3SummaryCards';
import { Project3IdentityScope } from '@/app/components/project3/Project3IdentityScope';
import { Project3IsoFramework } from '@/app/components/project3/Project3IsoFramework';
import { Project3Assets } from '@/app/components/project3/Project3Assets';
import { Project3Policies } from '@/app/components/project3/Project3Policies';
import { Project3RiskMatrix } from '@/app/components/project3/Project3RiskMatrix';
import { Project3PDCA } from '@/app/components/project3/Project3PDCA';
import { Project3Incident } from '@/app/components/project3/Project3Incident';
import { Project3References } from '@/app/components/project3/Project3References';
import { Project3Conclusion } from '@/app/components/project3/Project3Conclusion';

const Project3 = () => {
  const project = PROJECTS.find((p) => p.id === 'proj-03');
  if (!project) return <div>Proyecto no encontrado</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${project.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-[#06110f] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Project3Hero project={project} pdfUrl={pdfUrl} />
        <Project3SummaryCards />
        <Project3IdentityScope />
        <Project3IsoFramework />
        <Project3Assets />
        <Project3Policies />
        <Project3RiskMatrix />
        <Project3PDCA />
        <Project3Incident />
        <Project3Conclusion />
        <Project3References references={project.references} />

        <div className="mt-12">
          <Link
            to="/proyectos"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#54d17a]/15 border border-[#54d17a] text-[#54d17a] font-mono hover:bg-[#54d17a]/25 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project3;