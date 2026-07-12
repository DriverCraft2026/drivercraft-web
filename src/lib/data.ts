import { MessageCircle, Store, BookOpen, Camera, Music2 } from 'lucide-react';

export const links = {
  ip: 'mc.drivercraft.net',
  version: '1.21.5',
  store: 'https://store.drivercraft.net/',
  storeRanks: 'https://store.drivercraft.net/rangos',
  storeProtections: 'https://store.drivercraft.net/protecciones',
  storePets: 'https://store.drivercraft.net/pets',
  discord: 'https://discord.gg/drivercraft',
  facebook: 'https://www.facebook.com/DriverCraft/',
  instagram: 'https://www.instagram.com/drivercraftoficial',
  tiktok: 'https://www.tiktok.com/@drivercraft.oficial',
  voteTopg: 'https://topg.org/minecraft-servers/server-682836',
  voteMinecraftServers: 'https://minecraftservers.org/server/688237',
  voteMinecraftMp: 'https://minecraft-mp.com/server/358798/vote/',
  voteServidores: 'https://servidoresdeminecraft.es/server/vote/8aw0UXKE/mc.drivercraft.net'
};

export const pillars = [
  { title: 'Gemas legendarias', img: '/images/hero/spawn-overview.webp', text: 'Cada criatura puede ocultar un cristal del antiguo legado de los Reyes.' },
  { title: 'Reyes desafiantes', img: '/images/systems/pets.webp', text: 'Invoca y enfrenta al Rey Zombie, Skeleton, Enderman y Blaze.' },
  { title: 'Pets que progresan', img: '/images/systems/pets-overview.webp', text: 'Tu compañero sube de nivel, combate contigo y se vuelve cada vez más fuerte.' },
  { title: 'Misiones y recompensas', img: '/images/systems/missions.webp', text: 'Completa misiones, gana EXP y sube tu Nivel de Misión.' },
  { title: 'PvP competitivo', img: '/images/systems/pvp.webp', text: 'Rachas, recompensas y el rango Asesino para los mejores del mes.' },
  { title: 'Economía viva', img: '/images/systems/casino.webp', text: '/shop, spawners, casino, lotería, crates y progreso constante.' },
];

export const bosses = [
  { name: 'Rey Zombie', img: '/images/bosses/rey-zombie.webp', tone: 'El soberano de la corrupción verde.', mob: 'Zombies', scroll: 'Pergamino del Rey Zombie', element: 'Plaga', color: '#26d941' },
  { name: 'Rey Skeleton', img: '/images/bosses/rey-skeleton.webp', tone: 'El arquero de la noche eterna.', mob: 'Skeletons', scroll: 'Pergamino del Rey Skeleton', element: 'Huesos y viento', color: '#37d6d6' },
  { name: 'Rey Enderman', img: '/images/bosses/rey-enderman.webp', tone: 'El señor del vacío y las sombras.', mob: 'Endermans', scroll: 'Pergamino del Rey Enderman', element: 'Vacío', color: '#d23cff' },
  { name: 'Rey Blaze', img: '/images/bosses/rey-blaze.webp', tone: 'El monarca de las llamas del Nether.', mob: 'Blazes', scroll: 'Pergamino del Rey Blaze', element: 'Llamas', color: '#ffb21e' },
];

export const social = [
  { name: 'Discord', url: links.discord, text: 'Únete a la comunidad oficial.', icon: MessageCircle, logo: 'discord', color: '#5865F2' },
  { name: 'Tienda', url: links.store, text: 'Rangos, protecciones, llaves y kits.', icon: Store, logo: 'store', color: '#f5a72b' },
  { name: 'Facebook', url: links.facebook, text: 'Publicaciones y novedades oficiales.', icon: BookOpen, logo: 'facebook', color: '#1877F2' },
  { name: 'Instagram', url: links.instagram, text: 'Capturas, momentos y contenido visual.', icon: Camera, logo: 'instagram', color: '#E4405F' },
  { name: 'TikTok', url: links.tiktok, text: 'Videos cortos y mejores momentos.', icon: Music2, logo: 'tiktok', color: '#111111' },
];

export const basicCommands = [
  ['/menu', 'Abre el menú principal del servidor.'],
  ['/guia', 'Lee la guía rápida para comenzar tu aventura.'],
  ['/daily', 'Reclama tu recompensa diaria.'],
  ['/online', 'Consulta tu tiempo conectado y cuánto falta para recibir dinero por jugar.'],
  ['/shop', 'Compra recursos, spawners y objetos útiles para progresar.'],
  ['/shopgui', 'Vende objetos de forma rápida según los permisos de tu rango.'],
  ['/gemas', 'Abre el Compendio de Gemas.'],
  ['/boss', 'Consulta la guía de los Reyes y sus desafíos.'],
  ['/loteria', 'Mira la guía de la lotería y juega si quieres probar suerte.'],
  ['/spawn', 'Regresa al Spawn para recorrer sus zonas y warps.'],
  ['/warp nether', 'Viaja al Nether.'],
  ['/warp end', 'Viaja al End.'],
  ['/pet', 'Compra o administra tu mascota.'],
  ['/misiones', 'Abre el menú completo de misiones.'],
  ['/protecciones', 'Compra menas de protección para evitar robos y grief.'],
  ['/clan', 'Abre el menú de clanes.'],
  ['/pvp', 'Mira estadísticas, rachas y recompensas PvP.'],
  ['/rtp', 'Busca un lugar aleatorio para construir.'],
  ['/sethome', 'Guarda un hogar o lugar importante.'],
  ['/home', 'Viaja a tus hogares guardados.'],
  ['/delhome', 'Elimina hogares que ya no uses.'],
  ['/kit', 'Mira los kits disponibles para tu rango.'],
  ['/nv', 'Activa o desactiva la visión nocturna.'],
  ['/cchat', 'Abre el Chat Dinámico para personalizar estilo, colores y prefijo según tu rango.'],
  ['/buy', 'Abre la tienda online del servidor.'],
];

export const warps = ['Crates','Coliseo','End','Nether','Pets','Tienda','Restaurante','Misiones','Clanes','Portales','Casino','Gemas','Bosses','PvP','Info'];

export const gemLore = [
  { key:'fragmentada', name:'Gema Fragmentada', line:'Cristales de energía antigua brillan débilmente en su interior.', story:'Aunque su poder parece fragmentado, aún conserva el primer eco del legado de los Reyes.' },
  { key:'antigua', name:'Gema Antigua', line:'Su brillo sobrevivió al paso de incontables ciclos.', story:'Dentro de sus cristales reposan ecos de una era donde la energía de los Reyes recorría el mundo.' },
  { key:'ancestral', name:'Gema Ancestral', line:'Una reliquia cristalina de una época casi olvidada.', story:'Muy pocas Gemas conservaron su esencia intacta desde los días en que los Reyes dominaron la tierra.' },
  { key:'originaria', name:'Gema Originaria', line:'La primera de todas las Gemas.', story:'Se dice que nació junto al despertar de los Reyes y que su poder jamás ha dejado de latir.' },
];

export const crates = [
  { name:'Driver', tone:'La caja básica para empezar', text:'Pensada para nuevos jugadores: dinero, materiales y objetos útiles para la etapa inicial.', image:'/images/systems/crates.webp' },
  { name:'Vote', tone:'Apoya y recibe recompensas', text:'Sus llaves se obtienen votando por DriverCraft. Además de apoyar al servidor, recibes recompensas dentro del juego.', image:'/images/systems/crates.webp' },
  { name:'Boss', tone:'Recompensas superiores', text:'Sus llaves se consiguen derrotando Reyes. Puede entregar dinero, kits, premios especiales y progreso para jugadores avanzados.', image:'/images/systems/crates.webp' },
  { name:'VIP', tone:'Beneficios del rango', text:'Caja vinculada al rango VIP y también obtenible en misiones o recompensas especiales del servidor.', image:'/images/systems/crates.webp' },
  { name:'Elite', tone:'Premios de alto nivel', text:'Caja para jugadores Elite con recompensas superiores, dinero, equipo y objetos de progreso.', image:'/images/systems/crates.webp' },
  { name:'Misiones', tone:'Progreso de misionero', text:'Sus llaves se obtienen completando misiones y subiendo tu Nivel de Misión.', image:'/images/systems/crates.webp' },
  { name:'Evento', tone:'Premios por temporada', text:'Llaves entregadas en eventos, celebraciones y festividades especiales de DriverCraft.', image:'/images/systems/crates.webp' },
  { name:'Supernova', tone:'La más exclusiva', text:'Su llave se consigue en la tienda online, en desafíos difíciles o al reclamar la recompensa del día 30 en /daily.', image:'/images/systems/crates.webp' },
];
