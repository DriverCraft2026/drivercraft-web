import { CheckCircle2, Crown, MessageCircle, Palette, Sparkles, Wand2 } from 'lucide-react';
import { SectionTitle } from '@/components/Section';
import { links } from '@/lib/data';

const ranks=[
  {key:'usuario',name:'Usuario',color:'&7',tag:'Inicio',desc:'La base de todo aventurero. Empiezas aquí y construyes tu progreso jugando.',items:['Acceso completo al Survival 1.21.5','/menu, /guia, /daily y sistemas principales','Progreso por misiones, economía, gemas y pets']},
  {key:'nova',name:'Nova',color:'&3',tag:'Comodidad',desc:'Ideal para iniciar con más comodidad: más homes, mochila, comandos útiles, mejor /online y mayor probabilidad de Gemas.',items:['5 homes','2 misiones activas','18 slots de /bp','+5% dinero al completar misiones','5% de descuento en /shop']},
  {key:'vip',name:'VIP',color:'&b',tag:'Progreso',desc:'Más progreso para jugadores activos: tienda VIP, reparación, más mochila, mejores /daily y /online.',items:['10 homes','2 misiones activas','27 slots de /bp','+10% dinero al completar misiones','10% de descuento en /shop']},
  {key:'elite',name:'Elite',color:'&a',tag:'Máximo',desc:'La experiencia más completa: homes ilimitados, tienda Elite, keep inventory fuera de PvP, comandos máximos y beneficios PET.',items:['Homes ilimitados','3 misiones activas','54 slots de /bp','+20% dinero al completar misiones','15% de descuento en /shop']},
  {key:'asesino',name:'Asesino',color:'&9',tag:'Competitivo',desc:'Rango mensual para los dos mejores jugadores del TopPvP. Solo los más constantes logran portarlo.',items:['Se obtiene por TopPvP mensual','Reconocimiento competitivo','Identidad especial en la comunidad']},
  {key:'famoso',name:'Famoso',color:'&5',tag:'Creador',desc:'Rango para influencers o creadores que graban, publicitan o promocionan el servidor. Tiene beneficios equivalentes a Elite.',items:['Beneficios tipo Elite','Para creadores de contenido','Se consigue apoyando y promocionando DriverCraft']},
];

export default function Rangos(){return <main>
<section className="page-hero" style={{backgroundImage:"url('/images/hero/spawn-night.webp')"}}><div><span className="badge">RANGOS Y BENEFICIOS</span><h1>Progresa con estilo.</h1><p>Los rangos de DriverCraft mejoran tu experiencia con bonificaciones, descuentos y ventajas. Los rangos se compran en la tienda web, no con dinero del juego.</p><a href={links.storeRanks} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ir a la tienda</a></div></section>
<section className="section ranks-showcase"><SectionTitle eyebrow="Rangos" title="Cada rango tiene una identidad.">Orden oficial: Usuario, Nova, VIP, Elite, Asesino, Famoso, Builder, Moderador, Administrador y Owner.</SectionTitle><div className="rank-show-grid content-block">{ranks.map((r)=><article className={`rank-show-card rank-${r.key}`} key={r.name}><div className="rank-head"><b>{r.tag}</b></div><h3>{r.name}</h3><p>{r.desc}</p><ul>{r.items.map(i=><li key={i}><CheckCircle2 size={17}/>{i}</li>)}</ul></article>)}</div></section>
<section className="section rank-summary"><div className="content-block rank-band"><div><Crown size={36}/><h2>Los rangos impulsan tu progreso.</h2><p>Nova, VIP y Elite mejoran recompensas, descuentos, homes, mochila, misiones activas y comodidad. Asesino y Famoso son rangos especiales que se consiguen por logros o apoyo a la comunidad.</p></div><a href={links.storeRanks} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Comprar rango</a></div></section>
<section className="section dynamic-chat-section">
  <SectionTitle eyebrow="Chat dinámico" title="Tu identidad también se nota al escribir.">Con <b>/cchat</b>, todos los rangos de DriverCraft desbloquean formas de personalizar el chat, el color de tus mensajes y el estilo de tu prefijo según la identidad de tu rango.</SectionTitle>
  <div className="content-block chat-showcase">
    <div className="chat-preview-card">
      <div className="chat-window-top"><span></span><span></span><span></span><b>Vista previa del chat</b></div>
      <div className="chat-lines">
        <p><strong className="chat-nova">[NOVA]</strong> Aventurero: <span>¡Listo para misiones!</span></p>
        <p><strong className="chat-vip">[VIP]</strong> Valtheris: <span>Busco clan para bosses.</span></p>
        <p><strong className="chat-elite">[ELITE]</strong> Nova: <span>Mi pet ya subió de nivel.</span></p>
        <p><strong className="chat-famoso">[FAMOSO]</strong> Creador: <span>Hoy grabamos evento.</span></p>
      </div>
    </div>
    <div className="chat-info-grid">
      <article><MessageCircle size={28}/><h3>Comando /cchat</h3><p>Abre el menú de Chat Dinámico y cambia la forma en que tus mensajes aparecen dentro de la comunidad.</p></article>
      <article><Palette size={28}/><h3>Colores por rango</h3><p>Personaliza colores y tonos según la gama disponible para tu rango: Nova, VIP, Elite, Asesino o Famoso.</p></article>
      <article><Sparkles size={28}/><h3>Prefijos exclusivos</h3><p>Haz que tu prefijo destaque con identidad propia y sea reconocido por otros aventureros.</p></article>
      <article><Wand2 size={28}/><h3>Más personalidad</h3><p>El chat deja de ser plano: tu progreso, tu rango y tu estilo también se ven cuando escribes.</p></article>
    </div>
  </div>
</section>
</main>}
