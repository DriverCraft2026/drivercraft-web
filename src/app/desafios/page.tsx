import Image from 'next/image';
import { SectionTitle } from '@/components/Section';
import { bosses } from '@/lib/data';
import { Award, BookOpen, Flame, Layers, RefreshCw, ScrollText, Star, Target, Trophy } from 'lucide-react';

const bossMilestones = [
  { amount: '100', text: 'Primer gran reto de cazador de Reyes.' },
  { amount: '200', text: 'Demuestra constancia y reclama mejores premios.' },
  { amount: '300', text: 'Un desafío reservado para jugadores dedicados.' },
  { amount: '400+', text: 'Cada nuevo hito te acerca a recompensas superiores.' },
];

const missionTypes = [
  { icon: RefreshCw, title: 'Misiones diarias', text: 'Retos que cambian y te dan motivos para volver cada día.' },
  { icon: Layers, title: 'Misiones repetibles', text: 'Objetivos que puedes completar varias veces para seguir progresando.' },
  { icon: Trophy, title: 'Hazañas', text: 'Desafíos especiales para jugadores que quieren ir más allá.' },
  { icon: BookOpen, title: 'Por categorías', text: 'Misiones organizadas por actividades para que elijas tu camino.' },
  { icon: Star, title: 'Nivel de Misión', text: 'Cada misión entrega EXP y te ayuda a subir tu nivel de misionero.' },
  { icon: Award, title: 'Perfil del Aventurero', text: 'Tu avance refleja experiencia, recompensas reclamadas y progreso dentro del servidor.' },
];

export default function Desafios(){return <main>
<section className="page-hero" style={{backgroundImage:"url('/images/systems/pvp.webp')"}}><div><span className="badge">COMPETENCIA Y RETOS</span><h1>Desafíos que construyen leyendas.</h1><p>PvP competitivo, rachas, rango Asesino, Reyes, misiones, Casino y recompensas permanentes para quienes se atreven a ir más lejos.</p></div></section>

<section className="section"><div className="split content-block"><div className="image-panel"><Image src="/images/systems/pvp.webp" alt="PvP" width={1100} height={720}/></div><div className="text-panel"><span className="badge">PVP MENSUAL</span><h2>Solo dos jugadores serán Asesino.</h2><p>Cada mes los dos mejores del TopPvP reciben el rango Asesino. Tus kills, deaths, KDR y rachas hacen parte de tu historia competitiva.</p></div></div></section>

<section className="section"><SectionTitle eyebrow="Rachas" title="Cada kill puede acercarte a una recompensa.">El PvP tiene recompensas por hitos de racha como 25, 50, 100, 200, 400, 500 y más.</SectionTitle><div className="steps content-block"><div className="step"><h3>Combate</h3><p>Entra al Coliseo y demuestra tu habilidad.</p></div><div className="step"><h3>Sube tu racha</h3><p>Encadena kills y protege tu progreso.</p></div><div className="step"><h3>Reclama premios</h3><p>Cada hito desbloquea nuevas recompensas.</p></div><div className="step"><h3>Busca el Top</h3><p>Compite por el ranking mensual.</p></div><div className="step"><h3>Gana Asesino</h3><p>Los 2 primeros jugadores del TopPvP mensual reciben el rango Asesino.</p></div></div></section>

<section className="section missions-challenge-section"><div className="split content-block mission-feature"><div className="image-panel"><Image src="/images/systems/missions.webp" alt="Misiones DriverCraft" width={1100} height={720}/></div><div className="text-panel"><span className="badge">MISIONES</span><h2>Tu progreso también tiene nivel.</h2><p>En DriverCraft las misiones no son tareas sueltas: son una ruta de avance. Al completar misiones ganas dinero, recompensas y EXP de misión para subir tu Nivel de Misión y reclamar premios por tu progreso.</p><p>Desde misiones diarias hasta hazañas difíciles, cada objetivo te acerca a convertirte en un verdadero aventurero.</p></div></div><div className="mission-type-grid content-block">{missionTypes.map((m)=>{const Icon=m.icon;return <article className="mission-type-card" key={m.title}><Icon size={26}/><h3>{m.title}</h3><p>{m.text}</p></article>})}</div></section>

<section className="section boss-scrolls-section"><SectionTitle eyebrow="Reyes" title="Consigue pergaminos y despierta a los bosses.">Cada Rey tiene su propio pergamino de invocación. Se obtiene derrotando criaturas del mismo tipo y luego se usa con click derecho sobre el suelo en un lugar apto para el combate.</SectionTitle><div className="boss-grid boss-scroll-grid">{bosses.map(b=><article className="boss-card boss-scroll-card" key={b.name} style={{'--boss-color':b.color} as any}><Image src={b.img} alt={b.name} width={600} height={500}/><div><h3>{b.name}</h3><p>{b.tone}</p><ul><li><b>Obtención:</b> los <b>{b.mob}</b> pueden soltar el <b>{b.scroll}</b> al morir.</li><li><b>Invocación:</b> click derecho sobre el suelo para despertar al Rey.</li><li><b>Información:</b> vida 1024 ❤, dificultad alta, recompensas muy buenas y límite de 1 boss activo por jugador.</li></ul></div></article>)}</div></section>

<section className="section boss-milestone-section"><SectionTitle eyebrow="Desafíos de Bosses" title="Derrotar Reyes también desbloquea hitos.">Matar bosses es una de las rutas más difíciles del servidor. Los cazadores que acumulan victorias pueden reclamar recompensas especiales por alcanzar metas como 100, 200, 300, 400 y más bosses derrotados.</SectionTitle><div className="boss-milestone-grid content-block">{bossMilestones.map((m)=><article className="boss-milestone" key={m.amount}><Target size={30}/><strong>{m.amount}</strong><h3>Bosses derrotados</h3><p>{m.text}</p></article>)}</div><div className="content-block boss-hint"><Flame size={30}/><p>Prepárate bien antes de invocar un Rey: solo puedes tener 1 boss activo por jugador, y cada combate exige equipo, estrategia, mascotas fuertes y concentración.</p></div></section>

<section className="section casino-section"><div className="split content-block casino-feature"><div className="text-panel"><span className="badge">CASINO</span><h2>Pon tu suerte a prueba.</h2><p>En el Casino puedes apostar dinero del juego para intentar multiplicar tu fortuna... o perderla. Es un sistema pensado para emoción, riesgo y diversión.</p></div><div className="image-panel"><Image src="/images/systems/casino.webp" alt="Casino" width={1100} height={720}/></div></div></section>
</main>}
