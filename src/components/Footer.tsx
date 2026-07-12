import Image from 'next/image';
import { links } from '@/lib/data';
import { PlatformLogo } from './PlatformLogo';

export function Footer(){return <footer className="footer footer-pro">
  <div className="footer-pro-grid">
    <div className="footer-brand-block">
      <Image src="/images/logos/server-icon.png" alt="DC" width={64} height={64}/>
      <h2>DRIVER<span>CRAFT</span></h2>
      <p>Un Survival PvP Java & Bedrock 1.21.5 con misiones, Reyes, pets, Gemas, economía y comunidad.</p>
    </div>
    <div className="footer-column">
      <h3>Enlaces rápidos</h3>
      <a href="/">Inicio</a><a href="/aventura">Tu aventura</a><a href="/sistemas">Sistemas</a><a href="/desafios">Desafíos</a><a href="/staff">Staff</a>
    </div>
    <div className="footer-column">
      <h3>Servidor</h3>
      <p><b>IP:</b> {links.ip}</p>
      <p><b>Versión:</b> Java & Bedrock {links.version}</p>
      <p><b>Soporte:</b> <a href="mailto:soporte@drivercraft.net">soporte@drivercraft.net</a></p>
    </div>
    <div className="footer-socials">
      <h3>Conecta</h3>
      <a href={links.discord} target="_blank" rel="noopener noreferrer"><PlatformLogo name="Discord" size={19}/> Discord</a>
      <a href={links.store} target="_blank" rel="noopener noreferrer"><PlatformLogo name="Tienda" size={19}/> Tienda</a>
      <a href={links.facebook} target="_blank" rel="noopener noreferrer"><PlatformLogo name="Facebook" size={19}/> Facebook</a>
      <a href={links.instagram} target="_blank" rel="noopener noreferrer"><PlatformLogo name="Instagram" size={19}/> Instagram</a>
    </div>
  </div>
  <div className="footer-bottom"><small>© DriverCraft Network. Sitio oficial.</small><small>Hecho con pasión para nuestra comunidad.</small></div>
</footer>}
