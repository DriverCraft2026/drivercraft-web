import Image from 'next/image';
import { ExternalLink, Gift, HeartHandshake, KeyRound, Trophy } from 'lucide-react';
import { SectionTitle } from '@/components/Section';
import { links } from '@/lib/data';

const voteSites = [
  { name: 'TopG', url: links.voteTopg, text: 'Vota por DriverCraft en TopG y ayuda a que más aventureros nos descubran.' },
  { name: 'MinecraftServers', url: links.voteMinecraftServers, text: 'Apóyanos en MinecraftServers y reclama tus recompensas en el servidor.' },
  { name: 'Minecraft-MP', url: links.voteMinecraftMp, text: 'Tu voto aumenta nuestra visibilidad y fortalece la comunidad.' },
  { name: 'Servidores de Minecraft', url: links.voteServidores, text: 'Vota desde la lista hispana y sigue impulsando a DriverCraft.' },
];

export default function Votar(){return <main>
  <section className="page-hero vote-hero" style={{backgroundImage:"url('/images/systems/crates.webp')"}}>
    <div><span className="badge vote-badge"><Trophy size={18}/> APOYA A DRIVERCRAFT</span><h1>Vota, recibe recompensas y haz crecer la comunidad.</h1><p>Cada voto ayuda a que nuevos jugadores encuentren DriverCraft. Como agradecimiento, recibirás recompensas dentro del juego y llaves para abrir la Caja Vote.</p><div className="info-band"><span className="pill">Caja Vote</span><span className="pill">Recompensas</span><span className="pill">Comunidad</span><span className="pill">Crecimiento</span></div></div>
  </section>

  <section className="section vote-section">
    <SectionTitle eyebrow="Caja Vote" title="Tu apoyo también tiene recompensa.">Al votar por DriverCraft apoyas el crecimiento del servidor y recibes premios útiles para continuar tu aventura.</SectionTitle>
    <div className="split content-block vote-intro">
      <div className="image-panel featured-image"><Image src="/images/systems/crates.webp" alt="Caja Vote DriverCraft" width={1100} height={720}/></div>
      <div className="vote-benefits">
        <article><HeartHandshake size={34}/><h3>Ayudas al servidor</h3><p>Más votos significan más visibilidad, más jugadores nuevos y una comunidad más grande.</p></article>
        <article><KeyRound size={34}/><h3>Recibes llave Vote</h3><p>Dentro del servidor podrás reclamar recompensas y abrir la Caja Vote con premios para progresar.</p></article>
        <article><Gift size={34}/><h3>Premios por participar</h3><p>Votar es una forma sencilla de apoyar y recibir dinero, materiales, objetos o recompensas especiales.</p></article>
      </div>
    </div>
  </section>

  <section className="section vote-sites-section">
    <SectionTitle eyebrow="Páginas de votación" title="Elige una página y vota por DriverCraft.">Puedes votar en las páginas oficiales de listas Minecraft. Cada botón abre una pestaña nueva para que no pierdas esta página.</SectionTitle>
    <div className="vote-grid content-block">
      {voteSites.map((site, i)=><a key={site.name} className="vote-card" href={site.url} target="_blank" rel="noopener noreferrer"><span>{String(i+1).padStart(2,'0')}</span><h3>{site.name}</h3><p>{site.text}</p><b>Votar ahora <ExternalLink size={16}/></b></a>)}
    </div>
  </section>

  <section className="section"><div className="content-block vote-final"><Trophy size={42}/><h2>Gracias por apoyar a DriverCraft.</h2><p>Tu voto ayuda a que este mundo siga creciendo. Entra al servidor, reclama tus recompensas y abre tu Caja Vote.</p></div></section>
</main>}
