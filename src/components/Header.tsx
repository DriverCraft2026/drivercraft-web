'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Menu, X } from 'lucide-react';
import { links } from '@/lib/data';
import { PlatformLogo } from './PlatformLogo';

const nav = [
  ['🏠','Inicio','/'],
  ['🧭','Tu aventura','/aventura'],
  ['⚔️','Legado','/legado'],
  ['⚙️','Sistemas','/sistemas'],
  ['🏆','Desafíos','/desafios'],
  ['📖','Compendio','/compendio'],
  ['👑','Rangos','/rangos'],
  ['💎','Votar','/votar'],
  ['👥','Comunidad','/comunidad'],
  ['🛡️','Staff','/staff'],
];

export function Header(){
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return <header className="topbar topbar-v16">
    <div className="topbar-main-row">
      <a href="/" className="brand">
        <span className="brand-icon-wrap"><Image src="/images/logos/server-icon.png" alt="DriverCraft" width={58} height={58}/></span>
        <span className="brand-text"><b>DRIVER</b><em>CRAFT</em></span>
      </a>

      <nav className="desktop-nav nav-row-v16" aria-label="Navegación principal">
        {nav.map(([icon,t,h])=><a key={h} href={h}><span className="nav-emoji">{icon}</span><span>{t}</span></a>)}
      </nav>

      <div className="top-actions desktop-actions">
        <a className="social-btn discord-btn" href={links.discord} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><PlatformLogo name="Discord" size={20}/> Discord</a>
        <a className="social-btn store-btn" href={links.store} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><PlatformLogo name="Tienda" size={19}/> Tienda <ExternalLink size={14}/></a>
      </div>

      <button className="mobile-menu-btn" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <Menu className="menu-open" size={26}/>
        <X className="menu-close" size={26}/>
      </button>
    </div>


    <div className={`mobile-menu-panel ${open ? "open" : ""}`}>
      <nav>{nav.map(([icon,t,h])=><a key={h} href={h} onClick={closeMenu}><span>{icon}</span> {t}</a>)}</nav>
      <div className="mobile-actions">
        <a className="social-btn discord-btn" href={links.discord} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><PlatformLogo name="Discord" size={20}/> Discord</a>
        <a className="social-btn store-btn" href={links.store} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><PlatformLogo name="Tienda" size={19}/> Tienda <ExternalLink size={14}/></a>
      </div>
    </div>
  </header>
}
