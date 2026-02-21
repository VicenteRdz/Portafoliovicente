import React from 'react';
import { FileText } from 'lucide-react';  // Importación de FileText

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="w-5 h-5 text-[#cc6633]" />
        <h2 className="text-lg font-mono text-[#d4a574]">{title}</h2>
      </div>
      <div className="text-sm sm:text-base font-mono text-[#d4a574]/75 leading-relaxed">
        {content}
      </div>
    </section>
  );
};

export default Section;