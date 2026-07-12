'use client';

import { ArrowUp } from 'lucide-react';

export function BackToTop(){
  return (
    <button
      className="back-to-top"
      aria-label="Subir al inicio"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={22} />
    </button>
  );
}
