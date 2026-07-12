import Image from 'next/image';
import { PawPrint, Sparkles, Swords, ShieldCheck, PackageOpen } from 'lucide-react';
import { SectionTitle } from '@/components/Section';
import { crates, links } from '@/lib/data';

export default function Sistemas(){return <main>
  <section className="page-hero" style={{backgroundImage:"url('/images/systems/pets-overview.webp')"}}>
    <div><span className="badge">PETS, CRATES Y PROTECCIONES</span><h1>Sistemas que hacen crecer tu aventura.</h1><p>Tu mascota, tus recompensas y tus protecciones forman parte del progreso real de DriverCraft.</p></div>
  </section>

  <section className="section pets-section">
    <div className="split content-block">
      <div className="image-panel featured-image"><Image src="/images/systems/pets-overview.webp" alt="Pets DriverCraft" width={1100} height={900}/></div>
      <div className="text-panel"><span className="badge warm-badge"><PawPrint size={18}/> PETS</span><h2>Tu compañero también progresa contigo.</h2><p>En DriverCraft los pets no son solo decoración: pueden combatir junto a ti, ayudarte contra criaturas y volverse más fuertes mientras avanzas.</p><div className="feature-list"><p><b>Combate:</b> pets cuerpo a cuerpo o a distancia según su tipo.</p><p><b>Niveles:</b> a mayor nivel, más daño puede hacer tu mascota.</p><p><b>Variedad:</b> animales, mobs, voladores, especiales y legendarios.</p><p><b>Personalización:</b> partículas, skins, interacción y opciones diferentes según el pet.</p></div><a href={links.storePets} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver pets especiales</a></div>
    </div>
    <div className="content-block pet-premium-card"><Sparkles size={30}/><p><b>Beneficios Elite:</b> los rangos altos pueden activar glow, partículas premium y cambiar a modalidad de combate a distancia cuando el pet lo permite. Los pets que atacan a distancia por defecto no se convierten a cuerpo a cuerpo.</p></div>
  </section>

  <section className="section crates-section">
    <SectionTitle eyebrow="Crates" title="Cada caja tiene una forma distinta de conseguirse.">Llaves por votos, misiones, rangos, bosses, eventos, desafíos difíciles y recompensas especiales.</SectionTitle>
    <div className="crate-grid content-block">{crates.map((c)=><article className="crate-card" key={c.name}><Image src={c.image} alt={`Crate ${c.name}`} width={600} height={360}/><div><span><PackageOpen size={16}/> Caja {c.name}</span><h3>{c.tone}</h3><p>{c.text}</p></div></article>)}</div>
  </section>

  <section className="section protections-section systems-protections">
    <div className="split content-block">
      <div className="text-panel"><span className="badge warm-badge"><ShieldCheck size={18}/> PROTECCIONES</span><h2>Protege tu casa, tus cofres y tu historia.</h2><p>Las protecciones son necesarias para evitar robos, saqueos y grief. Desde <b>/protecciones</b> puedes comprar con dinero del juego protecciones de <b>16x16</b>, <b>32x32</b> y <b>64x64</b>.</p><p>Para villas, clanes, bases grandes y proyectos compartidos, la tienda online ofrece protecciones <b>128x128</b>, <b>256x256</b> y <b>512x512</b>.</p><a href={links.storeProtections} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver protecciones online</a></div>
      <div className="image-panel featured-image"><Image src="/images/systems/protecciones.webp" alt="Protecciones DriverCraft" width={1100} height={900}/></div>
    </div>
  </section>

  <section className="section systems-final"><div className="content-block rank-band"><div><Swords size={36}/><h2>Todo está conectado.</h2><p>Reclamas /daily, haces misiones, ganas dinero, mejoras tu pet, abres crates, proteges tu base, enfrentas Reyes y sigues creciendo.</p></div><a href="/aventura" className="btn btn-primary">Ver guía del aventurero</a></div></section>
</main>}
