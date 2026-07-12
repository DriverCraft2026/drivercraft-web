import { ShieldCheck, Clock3 } from 'lucide-react';
import { SectionTitle } from '@/components/Section';
import { basicCommands, links } from '@/lib/data';

export default function Aventura(){return <main>
  <section className="page-hero" style={{backgroundImage:"url('/images/hero/hero-spawn.webp')"}}><div><span className="badge">GUÍA DEL AVENTURERO</span><h1>Tu primera aventura.</h1><p>Una guía clara para saber qué hacer al entrar, cómo ganar dinero y cómo comenzar a progresar en DriverCraft.</p><div className="info-band"><span className="pill">1.21.5</span><span className="pill">/guia</span><span className="pill">/daily</span><span className="pill">/menu</span><span className="pill">/protecciones</span></div></div></section>
  <section className="section"><SectionTitle eyebrow="Primeros pasos" title="Empieza sin perderte.">DriverCraft tiene muchos sistemas, pero tu camino inicial es muy sencillo.</SectionTitle><div className="steps content-block">
    <div className="step"><h3>Entra al servidor</h3><p>Agrega <b>mc.drivercraft.net</b> en Java o Bedrock <b>1.21.5</b> y comienza como Usuario.</p></div>
    <div className="step"><h3>Usa /guia</h3><p>Lee la guía rápida dentro del servidor para entender los pasos iniciales.</p></div>
    <div className="step"><h3>Recorre el Spawn</h3><p>Visita los warps, portales, crates, casino, misiones y zonas principales.</p></div>
    <div className="step"><h3>Reclama /daily</h3><p>Cada día tienes una recompensa para impulsar tu progreso.</p></div>
    <div className="step"><h3>Busca dónde construir</h3><p>Usa <b>/rtp</b>, encuentra un lugar y protege tu casa para evitar robos o grief.</p></div>
    <div className="step"><h3>Consigue spawners</h3><p>Crea granjas: es un método muy usado para hacer dinero y conseguir pergaminos de bosses.</p></div>
    <div className="step"><h3>Completa misiones</h3><p>Ganas dinero, recompensas y EXP para subir tu Nivel de Misión.</p></div>
    <div className="step"><h3>Juega la lotería</h3><p>Tal vez cuentas con suerte y ganas dinero en una ronda.</p></div>
    <div className="step"><h3>Compra tu primer pet</h3><p>Tu compañero podrá subir de nivel para hacer más daño y ayudarte en combate.</p></div>
    <div className="step"><h3>Desafía a los Reyes</h3><p>Cuando estés preparado, enfrenta a los bosses y reclama grandes recompensas.</p></div>
  </div></section>
  <section className="section"><SectionTitle eyebrow="Cómo ganar dinero" title="Tu economía es parte de tu progreso.">El dinero del juego no compra rangos, pero sí impulsa tu aventura.</SectionTitle><div className="two-col content-block">
    <article className="article-card"><h3>Fuentes principales</h3><ul><li>Recompensas diarias con <b>/daily</b>.</li><li>Recompensa por permanecer conectado con <b>/online</b>.</li><li>Misiones y recompensas por Nivel de Misión.</li><li>Venta de objetos en <b>/shop</b> o <b>/shopgui</b> para vender todo de una sola vez según permisos.</li><li>Gemas y bolsas de monedas.</li><li>Bosses, crates, pergaminos y eventos.</li><li>Casino y lotería: puedes ganar... o perder.</li></ul></article>
    <article className="article-card"><h3>En qué usarlo</h3><ul><li>Comprar spawners y recursos en <b>/shop</b>.</li><li>Comprar y subir de nivel tus pets.</li><li>Crear clanes y crecer con amigos.</li><li>Comprar protecciones dentro del servidor.</li><li>Mejorar tu progreso económico.</li></ul></article>
  </div></section>
  <section className="section protections-section"><SectionTitle eyebrow="Protecciones" title="Cuida tu casa, tus cofres y tu progreso.">En Survival construir es importante, pero proteger lo que construyes es obligatorio si quieres evitar robos, grief y pérdidas.</SectionTitle><div className="split content-block protection-split"><div className="image-panel featured-image"><img src="/images/systems/protecciones.webp" alt="Protecciones DriverCraft" /></div><div className="protection-grid">
    <article className="protection-card"><ShieldCheck size={36}/><h3>Protecciones del juego</h3><p>Desde <b>/protecciones</b> puedes comprar con dinero del juego las protecciones <b>16x16</b>, <b>32x32</b> y <b>64x64</b>. Son perfectas para casas, granjas y zonas personales.</p></article>
    <article className="protection-card premium"><ShieldCheck size={36}/><h3>Protecciones grandes</h3><p>En la tienda online puedes conseguir protecciones <b>128x128</b>, <b>256x256</b> y <b>512x512</b>. Son ideales para villas, bases grandes, zonas de clanes y proyectos compartidos.</p><a href={links.storeProtections} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver protecciones online</a></article>
  </div></div></section>
  <section className="section online-section"><div className="content-block online-reward"><Clock3 size={38}/><div><span>Tiempo conectado</span><h2>También ganas por permanecer jugando.</h2><p>Usa <b>/online</b> para revisar cuánto falta para tu próxima recompensa por tiempo conectado. Es otra forma de hacer crecer tu economía mientras disfrutas DriverCraft.</p></div></div></section>
  <section className="section"><SectionTitle eyebrow="Comandos básicos" title="Herramientas del aventurero.">Estos comandos te ayudan a entender y moverte por DriverCraft.</SectionTitle><div className="command-grid content-block">{basicCommands.map(([cmd,desc])=><div className="command-card" key={cmd}><code>{cmd}</code><p>{desc}</p></div>)}</div></section>
</main>}
