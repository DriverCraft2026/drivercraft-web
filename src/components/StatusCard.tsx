'use client';
import { useEffect, useState } from 'react';
import { Copy, Wifi } from 'lucide-react';
import { links } from '@/lib/data';

export function StatusCard({ compact = false }: { compact?: boolean }) {
  const [players, setPlayers] = useState(1);
  const [online, setOnline] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch('https://api.mcsrvstat.us/3/mc.drivercraft.net')
      .then(r => r.json())
      .then(data => {
        if (!alive) return;
        setOnline(Boolean(data?.online));
        setPlayers(Number(data?.players?.online ?? 1));
      })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  async function copyIp() {
    await navigator.clipboard.writeText(links.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className={`status-card glass ${compact ? 'status-compact' : ''}`}>
      <div className="status-line"><Wifi size={18}/><span>{online ? 'ONLINE' : 'REVISANDO'}</span></div>
      <div className="players"><strong>{players}</strong><span>/300</span></div>
      <p>Aventureros conectados</p>
      <div className="status-meta-grid">
        <div className="ip-box"><small>IP OFICIAL</small><b>{links.ip}</b></div>
        <div className="ip-box version-box"><small>VERSIÓN</small><b>Java & Bedrock {links.version}</b></div>
      </div>
      <button onClick={copyIp} className="btn btn-primary"><Copy size={18}/>{copied ? 'Nos vemos dentro' : 'Copiar IP'}</button>
    </div>
  );
}
