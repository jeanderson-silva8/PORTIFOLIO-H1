import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/projects';
import { useMagnetic } from '../hooks/useMagnetic';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import './Contact.css';

const CHANNELS = [
  {
    key: 'email',
    label: 'Email',
    handle: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    Icon: Mail,
    accent: false,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    handle: 'Mensagem direta',
    href: PROFILE.whatsapp,
    Icon: MessageCircle,
    accent: true,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: '/jeanderson-silva',
    href: PROFILE.linkedin,
    Icon: LinkedinIcon,
    accent: false,
  },
  {
    key: 'github',
    label: 'GitHub',
    handle: '@jeanderson-silva8',
    href: PROFILE.github,
    Icon: GithubIcon,
    accent: false,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg" aria-hidden="true" />

      <div className="container contact-inner">
        <SectionTitle
          align="center"
          eyebrow="06 / Contato direto"
          title="Vamos Construir"
          accent="Algo Incrível"
          description="Tem um projeto em mente? Vamos conversar sobre como posso ajudar"
        />

        <Reveal.Group className="contact-grid" stagger={0.12}>
          {CHANNELS.map((c) => (
            <Reveal.Item key={c.key}>
              <ContactCard channel={c} />
            </Reveal.Item>
          ))}
        </Reveal.Group>

        <Reveal y={20} delay={0.1} className="contact-availability">
          <p className="font-mono">
            <span className="contact-avail-dot" />
            Disponível para vagas full stack · freelas · projetos pessoais
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({ channel }) {
  const ref = useMagnetic(0.18, 140);
  const { Icon, label, handle, href, accent } = channel;
  const isExternal = href.startsWith('http');

  return (
    <a
      ref={ref}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`cc ${accent ? 'cc--accent' : ''}`}
    >
      <div className="cc-icon">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <div className="cc-body">
        <span className="cc-label font-mono">{label}</span>
        <span className="cc-handle">{handle}</span>
      </div>

      <span className="cc-arrow" aria-hidden="true">
        <ArrowUpRight size={20} strokeWidth={2} />
      </span>
    </a>
  );
}
