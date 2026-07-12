import type { CSSProperties } from 'react';
import { Crown, Shield, Sword, Sparkles, Users, BadgeCheck, Mail, ShoppingCart, Bug, AlertTriangle, LifeBuoy } from 'lucide-react';

const supportEmail = 'soporte@drivercraft.net';

const staff = [
  { nick: 'Valtheris', role: 'Owner', color: '#ffb84d', icon: Crown, text: 'Dirección del servidor, decisiones principales y visión general de DriverCraft.' },
  { nick: 'xxx_nova_xxx', role: 'Owner', color: '#ffb84d', icon: Crown, text: 'Administración principal, sistemas, comunidad y crecimiento del servidor.' },
  { nick: 'diproxi', role: 'Admin Build', color: '#b86bff', icon: Shield, text: 'Encargado de construcciones, supervisión de estructuras, zonas oficiales y proyectos de build.' },
  { nick: 'el_games', role: 'Mod', color: '#43e66d', icon: Sword, text: 'Moderación del servidor, ayuda a jugadores y cuidado de la comunidad.' },
  { nick: 'epicnoobconejox', role: 'Mod', color: '#43e66d', icon: Sword, text: 'Moderación, acompañamiento a jugadores y apoyo dentro del servidor.' },
];

const supportCards = [
  { icon: ShoppingCart, title: 'Problemas con compras', text: 'Si una compra no llegó, fue procesada de forma incorrecta o tienes dudas sobre la tienda, escríbenos con tu nick y comprobante.' },
  { icon: Bug, title: 'Reportar bugs', text: 'Informa errores, fallos visuales, problemas con comandos, misiones, pets, crates o cualquier sistema del servidor.' },
  { icon: AlertTriangle, title: 'Inconsistencias', text: 'Reporta comportamientos extraños, pérdidas inesperadas, permisos incorrectos o situaciones que afecten tu experiencia.' },
  { icon: LifeBuoy, title: 'Soporte general', text: 'Para dudas, sugerencias, reportes o ayuda administrativa, contacta a la administración por el canal oficial.' },
];

export default function StaffPage(){
  return <main className="page staff-page">
    <section className="page-hero staff-hero" style={{backgroundImage:"url('/images/hero/spawn-overview.webp')"}}>
      <div>
        <span className="badge"><Users size={16}/> STAFF OFICIAL</span>
        <h1>El equipo que cuida DriverCraft.</h1>
        <p>Conoce a las personas que mantienen DriverCraft activo, organizado y listo para que cada jugador disfrute una experiencia segura, bonita y bien acompañada.</p>
        <div className="info-band">
          <span className="pill">Owners</span>
          <span className="pill">Administración Build</span>
          <span className="pill">Moderación</span>
          <span className="pill">Soporte</span>
        </div>
      </div>
    </section>

    <section className="section staff-section">
      <div className="section-title">
        <span>Equipo DriverCraft</span>
        <h2>Staff oficial del servidor.</h2>
        <p>Ellos cuidan la comunidad, revisan reportes, apoyan a los jugadores y ayudan a que el servidor siga creciendo con orden, confianza y buena energía.</p>
      </div>

      <div className="staff-grid">
        {staff.map((member)=>{
          const Icon = member.icon;
          return <article className="staff-card" key={member.nick} style={{'--staff-color': member.color} as CSSProperties}>
            <div className="staff-card-glow" />
            <div className="staff-skin-wrap">
              <img className="staff-skin" src={`https://mc-heads.net/body/${member.nick}/220`} alt={`Skin de ${member.nick}`} loading="lazy" />
            </div>
            <div className="staff-info">
              <div className="staff-role"><Icon size={18}/><span>{member.role}</span></div>
              <h3>{member.nick}</h3>
              <p>{member.text}</p>
              <div className="staff-verified"><BadgeCheck size={16}/> Miembro oficial DriverCraft</div>
            </div>
          </article>
        })}
      </div>
    </section>

    <section className="section support-section">
      <div className="section-title support-title">
        <span>Soporte del servidor</span>
        <h2>¿Necesitas ayuda?</h2>
        <p>Para problemas con compras, bugs, reportes o cualquier inconsistencia, contacta a la administración y soporte oficial de DriverCraft.</p>
      </div>
      <div className="support-grid">
        {supportCards.map((card)=>{
          const Icon = card.icon;
          return <article className="support-card" key={card.title}>
            <Icon size={34}/>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        })}
      </div>
      <div className="support-mail glass">
        <Mail size={42}/>
        <div>
          <span>Correo oficial de soporte</span>
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </div>
      </div>
    </section>

    <section className="section staff-note-section">
      <div className="staff-note glass">
        <Sparkles size={30}/>
        <div>
          <h2>Seguridad ante todo.</h2>
          <p>El staff oficial nunca te pedirá contraseñas, códigos privados ni pagos por fuera de la tienda oficial. Usa siempre los canales oficiales de DriverCraft.</p>
        </div>
      </div>
    </section>
  </main>
}
