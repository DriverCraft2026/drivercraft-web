import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { PlatformLogo } from '@/components/PlatformLogo';
import type { CSSProperties } from 'react';
import { StatusCard } from '@/components/StatusCard';
import { SectionTitle } from '@/components/Section';
import { bosses, pillars, social, gemLore } from '@/lib/data';

const heroStats = [
  ['🎮','Java & Bedrock','1.21.5'],
  ['👑','Bosses únicos','4 Reyes'],
  ['💎','Progreso especial','Gemas y misiones'],
  ['⚔️','Competencia','PvP mensual'],
];

const paths = [
  { icon:'⛏️', title:'Minero', text:'Haz fortuna recolectando recursos, vendiendo en la economía y preparando tu base.' },
  { icon:'⚔️', title:'Guerrero', text:'Enfrenta Reyes, domina el PvP y reclama recompensas de alto nivel.' },
  { icon:'🏰', title:'Constructor', text:'Crea tu hogar, protege tus zonas y levanta estructuras que dejen huella.' },
  { icon:'💎', title:'Coleccionista', text:'Consigue Gemas, pets, crates, llaves y objetos especiales del servidor.' },
];

const highlights = [
  { icon:'🐾', title:'Pets con progreso', text:'Mascotas que te acompañan, combaten contigo y suben de nivel.' },
  { icon:'📜', title:'Misiones y niveles', text:'Diarias, repetibles, hazañas y recompensas por subir tu perfil aventurero.' },
  { icon:'🎰', title:'Casino y lotería', text:'Espacios de suerte para ganar premios y darle emoción a tu avance.' },
  { icon:'🛡️', title:'Protecciones', text:'Cuida tu base, cofres, granjas y zonas de clan contra robos y grief.' },
  { icon:'📦', title:'Crates', text:'Llaves por votar, misiones, rangos, bosses, eventos y recompensas especiales.' },
  { icon:'🏆', title:'Desafíos', text:'Hitos por bosses, PvP y progreso con recompensas para jugadores constantes.' },
];

const timeline = [
  ['🌱','Inicio','Entra al Spawn, usa /guia, copia la IP y reclama tus primeras recompensas.'],
  ['📜','Progreso','Completa misiones, gana dinero, consigue tu pet y sube tu nivel de aventurero.'],
  ['👑','Desafío','Consigue pergaminos, despierta Reyes y desbloquea recompensas épicas.'],
  ['🏆','Legado','Compite, construye, lidera clanes y deja tu nombre marcado en DriverCraft.'],
];

const gallery = [
  ['/images/hero/spawn-overview.webp','Spawn principal','El centro de la aventura'],
  ['/images/systems/casino.webp','Casino','Suerte, premios y emoción'],
  ['/images/systems/crates.webp','Crates','Llaves y recompensas'],
  ['/images/systems/pets.webp','Pets','Compañeros de progreso'],
  ['/images/warps/warp-bosses.webp','Zona de Bosses','Prepara tus batallas'],
  ['/images/systems/protecciones.webp','Protecciones','Construye con tranquilidad'],
];


export default function Home(){
  return <main className="page">
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content reveal">
        <div className="hero-badge-row"><div className="badge official-badge">✨ PÁGINA OFICIAL</div><div className="badge version-badge">🎮 1.21.5</div></div>
        <Image className="hero-logo" src="/images/logos/drivercraft-logo.png" alt="DriverCraft" width={1400} height={420} priority />
        <h1>Mucho más que un Survival.</h1>
        <p>Explora un mundo vivo en Minecraft 1.21.5, consigue Gemas legendarias, mejora tu pet, completa misiones, desafía a los Reyes, prueba suerte en el Casino y compite para dejar tu legado.</p>
        <div className="hero-actions">
          <a href="/aventura" className="btn btn-primary btn-hero-main">Comenzar aventura</a>
          <a href="#trailer" className="btn btn-dark btn-hero-main">▶ Ver trailer</a>
        </div>
        <div className="hero-stat-strip">
          {heroStats.map(([icon,label,value]) => <div className="hero-stat" key={label}><span>{icon}</span><small>{label}</small><b>{value}</b></div>)}
        </div>
      </div>
      <div className="hero-side reveal">
        <StatusCard compact />
        <div className="quick-card glass official-card"><h3>Páginas oficiales</h3><p>Conecta con la comunidad, mira novedades y visita la tienda oficial.</p><div className="official-mini-grid">{social.map((s)=> <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="official-mini" style={{'--accent':s.color} as CSSProperties}><span className={`platform-logo ${s.logo}`}><PlatformLogo name={s.name} size={18}/></span><span>{s.name}</span></a>)}</div></div>
      </div>
    </section>

    <section className="section path-section">
      <SectionTitle eyebrow="Elige tu camino" title="Cada jugador vive DriverCraft a su manera.">
        Empieza como aventurero y decide qué historia quieres construir: riqueza, combate, construcción o colección.
      </SectionTitle>
      <div className="path-grid content-block">
        {paths.map((p)=><article className="path-card" key={p.title}><span>{p.icon}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
      </div>
    </section>

    <section className="section epic-highlights">
      <SectionTitle eyebrow="Lo esencial" title="Sistemas que hacen que siempre tengas algo por hacer.">
        DriverCraft está diseñado para que cada sesión tenga objetivo, recompensa y una razón para volver.
      </SectionTitle>
      <div className="highlight-grid content-block">
        {highlights.map((h)=><article className="highlight-card" key={h.title}><span>{h.icon}</span><h3>{h.title}</h3><p>{h.text}</p></article>)}
      </div>
    </section>

    <section className="section gallery-section">
      <SectionTitle eyebrow="Mira el mundo" title="Zonas creadas para aventura, comercio y comunidad.">
        Spawn, Casino, Crates, Pets, Bosses y protecciones: lugares pensados para que DriverCraft se sienta vivo desde el primer minuto.
      </SectionTitle>
      <div className="gallery-track content-block">
        {gallery.map(([src,title,text])=><article className="gallery-card" key={title}><Image src={src} alt={title} width={760} height={520}/><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
    </section>

    <section className="section timeline-section">
      <SectionTitle eyebrow="Tu legado" title="De nuevo jugador a leyenda del servidor.">
        La página no solo explica sistemas: también muestra el camino que vivirá cada aventurero dentro de DriverCraft.
      </SectionTitle>
      <div className="timeline content-block">
        {timeline.map(([icon,title,text],i)=><article className="timeline-item" key={title}><span>{icon}</span><div><small>Paso {i+1}</small><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
    </section>

    <section className="section trailer-section" id="trailer">
      <div className="trailer-card content-block">
        <div>
          <span className="badge warm-badge">TRAILER OFICIAL</span>
          <h2>Próximamente: el trailer de DriverCraft.</h2>
          <p>Cuando tengas el video oficial, este bloque será el lugar perfecto para mostrarlo. Por ahora funciona como llamado épico para entrar al servidor.</p>
        </div>
        <a href="/aventura" className="btn btn-primary">Entrar a la aventura</a>
      </div>
    </section>

    <section className="section" id="que-es">
      <SectionTitle eyebrow="¿Qué es DriverCraft?" title="Un servidor hecho para progresar, competir y disfrutar.">
        DriverCraft combina Survival 1.21.5, economía, PvP, misiones, pets, Reyes, Gemas y comunidad en una experiencia clara para nuevos jugadores y emocionante para veteranos.
      </SectionTitle>
      <div className="cards">{pillars.map(p=><article className="feature-card" key={p.title}><Image src={p.img} alt={p.title} width={700} height={500}/><div><h3>{p.title}</h3><p>{p.text}</p></div></article>)}</div>
    </section>

    <section className="section">
      <div className="split content-block">
        <div className="image-panel"><Image src="/images/hero/spawn-overview.webp" alt="Spawn DriverCraft" width={1100} height={720}/></div>
        <div className="text-panel"><span className="badge">TU PRIMERA AVENTURA</span><h2>Entra, entiende y empieza a jugar.</h2><p>Usa <b>/guia</b>, reclama <b>/daily</b>, recorre el Spawn, visita los warps, completa misiones, gana dinero y comienza a construir tu historia.</p><a href="/aventura" className="btn btn-primary">Ver guía del aventurero</a></div>
      </div>
    </section>

    <section className="section legacy" id="legado">
      <SectionTitle eyebrow="El Legado de los Reyes" title="Cuando los Reyes despertaron, las Gemas nacieron.">
        La energía antigua quedó dispersa por DriverCraft. Algunas criaturas guardan pequeños fragmentos; otras, muy raramente, revelan una Originaria.
      </SectionTitle>
      <div className="gems-grid content-block">
        {gemLore.map((g)=><div className={`gem-card gem-${g.key}`} key={g.name}><div className="gem-orb"><Image src={`/images/gems/${g.key}.png`} alt={g.name} width={128} height={128}/></div><h3>{g.name}</h3><p>{g.line}</p></div>)}
      </div>
      <div style={{textAlign:'center',marginTop:36}}><a href="/legado" className="btn btn-primary">Descubrir el legado</a></div>
    </section>

    <section className="section">
      <SectionTitle eyebrow="Los Reyes" title="No son simples bosses. Son los desafíos del mundo.">
        Rey Zombie, Rey Skeleton, Rey Enderman y Rey Blaze esperan a los aventureros capaces de reclamar sus tesoros y superar sus desafíos permanentes.
      </SectionTitle>
      <div className="boss-grid">{bosses.map(b=><article className="boss-card" key={b.name}><Image src={b.img} alt={b.name} width={600} height={500}/><div><h3>{b.name}</h3><p>{b.tone}</p></div></article>)}</div>
    </section>

    <section className="section">
      <div className="split content-block">
        <div className="text-panel"><span className="badge warm-badge">PROGRESO CONECTADO</span><h2>Todo te impulsa al siguiente paso.</h2><p>Reclama recompensas diarias, completa misiones, gana dinero, mejora tu pet, consigue Gemas, enfrenta Reyes, abre crates, juega la lotería, prueba suerte en el Casino y compite en PvP.</p><div className="hero-actions"><a href="/sistemas" className="btn btn-primary">Ver sistemas</a><a href="/desafios" className="btn btn-dark">Ver desafíos</a></div></div>
        <div className="image-panel"><Image src="/images/systems/pets.webp" alt="Pets y aventura" width={1100} height={720}/></div>
      </div>
    </section>

    <section className="section home-systems-preview">
      <SectionTitle eyebrow="Sistemas esenciales" title="Pets, crates y protecciones sostienen tu progreso.">Tu mascota te acompaña, las crates premian tu esfuerzo y las protecciones cuidan todo lo que construyes.</SectionTitle>
      <div className="system-preview-grid content-block">
        <a href="/sistemas" className="system-preview-card"><Image src="/images/systems/pets-overview.webp" alt="Pets" width={700} height={520}/><div><h3>Pets</h3><p>Combaten contigo, suben de nivel y pueden tener partículas, skins y funciones especiales.</p></div></a>
        <a href="/sistemas" className="system-preview-card"><Image src="/images/systems/crates.webp" alt="Crates" width={700} height={520}/><div><h3>Crates</h3><p>Llaves por votos, misiones, rangos, eventos, bosses, desafíos y Supernova.</p></div></a>
        <a href="/sistemas" className="system-preview-card"><Image src="/images/systems/protecciones.webp" alt="Protecciones" width={700} height={520}/><div><h3>Protecciones</h3><p>Protege tu casa, cofres, granjas, villas y zonas de clan.</p></div></a>
      </div>
    </section>

    <section className="section community-section">
      <SectionTitle eyebrow="Comunidad" title="Una aventura se disfruta más cuando se vive acompañado.">
        Únete a Discord, mira nuestras redes oficiales y forma parte de una comunidad alegre, competitiva y cercana.
      </SectionTitle>
      <div className="social-grid content-block">{social.map(s=> <a className="social-card" key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{'--accent':s.color} as CSSProperties}><span className={`social-icon ${s.logo}`}><PlatformLogo name={s.name} size={30}/></span><h3>{s.name}</h3><p>{s.text}</p></a>)}</div>
    </section>

    <section id="comenzar" className="cta"><Sparkles size={42}/><h2>Tu historia apenas comienza.</h2><p>Copia la IP, entra a DriverCraft y descubre por qué cada aventura puede convertirse en un legado.</p><StatusCard compact /></section>
  </main>
}
