import Image from 'next/image';
import { SectionTitle } from '@/components/Section';
import { PlatformLogo } from '@/components/PlatformLogo';
import type { CSSProperties } from 'react';
import { links, social } from '@/lib/data';
export default function Comunidad(){return <main>
<section className="page-hero" style={{backgroundImage:"url('/images/hero/hero-spawn.webp')"}}><div><span className="badge">COMUNIDAD OFICIAL</span><h1>La aventura se vive mejor juntos.</h1><p>DriverCraft busca ser competitivo, épico y profesional, pero también una comunidad alegre donde los jugadores disfruten su servidor.</p><div className="hero-actions"><a href={links.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Entrar al Discord</a><a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Visitar tienda</a></div></div></section>
<section className="section"><SectionTitle eyebrow="Redes oficiales" title="Sigue a DriverCraft en todas partes.">Noticias, capturas, videos, anuncios y comunidad.</SectionTitle><div className="social-grid content-block">{social.map(s=><a className="social-card" key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{'--accent':s.color} as CSSProperties}><span className={`social-icon ${s.logo}`}><PlatformLogo name={s.name} size={30}/></span><h3>{s.name}</h3><p>{s.text}</p></a>)}</div></section>
<section className="section"><SectionTitle eyebrow="Galería" title="Momentos del mundo DriverCraft.">Momentos, capturas y lugares que muestran la identidad visual de DriverCraft.</SectionTitle><div className="gallery content-block">{Array.from({length:9},(_,i)=><Image key={i} src={`/images/gallery/${String(i+1).padStart(2,'0')}.webp`} alt={`Galería ${i+1}`} width={700} height={450}/>)}</div></section>
</main>}
