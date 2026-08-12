import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';

const services = [
  {
    number: '01',
    title: 'Escucha integral',
    text: 'Un espacio sereno para reconocer emociones, hábitos y necesidades personales con mayor claridad.',
  },
  {
    number: '02',
    title: 'Saberes que se integran',
    text: 'Estarás en contacto con la Homeopatía y la Medicina Unani, dos tradiciones que se integran para acompañar tu bienestar físico, mental, emocional y evolutivo, respaldadas por una amplia trayectoria histórica.',
  },
  {
    number: '03',
    title: 'Acompañamiento consciente',
    text: 'Orientación personalizada para transformar la reflexión en acciones pequeñas, realistas y sostenibles.',
  },
];

const principles = [
  'Escucha sin juicios',
  'Ritmos personales',
  'Decisiones informadas',
  'Cuidado complementario',
];

function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="Ir al inicio de Quirónser">
      <span className="brand__symbol" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <circle cx="24" cy="24" r="20" />
          <path d="M14 29c5-1 8-5 10-12 5 3 8 7 10 13" />
          <path d="M15 32c6 3 13 2 19-2" />
          <circle cx="31" cy="14" r="2.3" className="brand__spark" />
        </svg>
      </span>
      <span className="brand__name">Quirónser</span>
    </a>
  );
}

function Icon({ name }) {
  const paths = {
    leaf: <path d="M20 4C11 5 6 10 6 17c0 3 2 5 5 5 7 0 11-8 9-18ZM8 20c3-4 6-7 11-10" />,
    heart: <path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z" />,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  //Nuevos cambios para mejorar el form
  const [menuOpen, setMenuOpen] = useState(false);

  //uso general del form
  const [state, handleSubmit] = useForm('meajaknv');

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSubmitted(true);
  //   event.currentTarget.reset();
  // };

  return (
    <div className="site-shell">
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <BrandMark />

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegación principal">
            <a href="#enfoque" onClick={closeMenu}>Enfoque</a>
            <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <a className="button button--small" href="#contacto" onClick={closeMenu}>Agendar conversación</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__background" aria-hidden="true" />
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__orb hero__orb--one" aria-hidden="true" />
          <div className="hero__orb hero__orb--two" aria-hidden="true" />

          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow"><span /> Bienestar que integra tu historia</p>
              <h1>Escuchar el cuerpo.<br /><em>Comprender el ser.</em></h1>
              <p className="hero__lead">
                Un espacio de acompañamiento humano que conecta reflexión emocional,
                autocuidado y saberes tradicionales para vivir con mayor equilibrio.
              </p>
              <div className="hero__actions">
                <a className="button" href="#contacto">
                  Iniciar mi proceso <Icon name="arrow" />
                </a>
                <a className="text-link" href="#enfoque">Descubrir el enfoque <span>↘</span></a>
              </div>
              <div className="hero__trust">
                <div className="trust-mark">
                  <span className="trust-mark__icon"><Icon name="leaf" /></span>
                  <span><strong>Visión integral</strong><small>Cuerpo, mente y emoción</small></span>
                </div>
                <div className="trust-mark">
                  <span className="trust-mark__icon"><Icon name="heart" /></span>
                  <span><strong>Acompañamiento humano</strong><small>Escucha cercana y respetuosa</small></span>
                </div>
              </div>
            </div>

            <div className="hero__visual" aria-label="Ilustración de Quirón, símbolo de acompañamiento y sanación">
              <div className="hero__halo" aria-hidden="true" />
              <img src="/images/quiron-character.png" alt="Quirón, centauro sabio y protector" />
              <div className="floating-note floating-note--top">
                <span className="floating-note__dot" />
                <div><small>Propósito</small><strong>Acompañar para comprender</strong></div>
              </div>
              <div className="floating-note floating-note--bottom">
                <span className="floating-note__icon"><Icon name="compass" /></span>
                <div><small>Tu proceso</small><strong>Consciente y personal</strong></div>
              </div>
            </div>
          </div>

          <a href="#enfoque" className="scroll-cue" aria-label="Bajar a la siguiente sección">
            <span>Explorar</span><i />
          </a>
        </section>

        <section className="section philosophy" id="enfoque">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow"><span /> El enfoque Quirónser</p>
              <h2>Un camino de cuidado con<br /><em>sentido, presencia y propósito</em></h2>
              <p>Integramos distintas miradas de bienestar sin perder de vista tu autonomía, tu contexto y tus necesidades reales.</p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="service-card__number">{service.number}</span>
                  <span className="service-card__icon"><Icon name={['heart', 'leaf', 'compass'][index]} /></span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-card__line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experiencia">
          <div className="container experience__grid">
            <div className="experience__art">
              <div className="experience__circle" />
              <div className="experience__quote">
                <span>“</span>
                <p>Sanar también puede comenzar por escucharnos con honestidad y compasión.</p>
              </div>
              <div className="experience__botanical" aria-hidden="true">
                <svg viewBox="0 0 230 300">
                  <path d="M112 292C105 216 114 145 153 74" />
                  <path d="M132 139c-45-3-65-24-70-59 39 4 62 22 70 59Z" />
                  <path d="M143 104c2-41 22-65 58-75-2 38-19 63-58 75Z" />
                  <path d="M113 212c-39-2-61-20-69-52 35 1 60 18 69 52Z" />
                  <path d="M119 180c6-36 26-57 60-63-5 35-23 57-60 63Z" />
                </svg>
              </div>
            </div>

            <div className="experience__content">
              <p className="eyebrow"><span /> Una experiencia cercana</p>
              <h2>Tu historia no necesita una fórmula.<br /><em>Necesita ser escuchada.</em></h2>
              <p>
                Cada proceso comienza con una conversación. A partir de ella construimos una ruta de acompañamiento clara, respetuosa y alineada con aquello que deseas trabajar.
              </p>
              <ul className="principles-list">
                {principles.map((principle) => (
                  <li key={principle}><span><Icon name="check" /></span>{principle}</li>
                ))}
              </ul>
              <a className="button button--outline" href="#contacto">Conocer mi siguiente paso <Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="container contact__panel">
            <div className="contact__copy">
              <p className="eyebrow eyebrow--light"><span /> Comienza con una conversación</p>
              <h2>Da un primer paso hacia<br /><em>una vida más consciente.</em></h2>
              <p>Cuéntanos brevemente qué deseas explorar. Te responderemos para coordinar una conversación inicial.</p>
              <div className="contact__details">
                <div><small>Atención</small><strong>Online y personalizada</strong></div>
                <div><small>Respuesta</small><strong>Dentro de 1–2 días hábiles</strong></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Nombre</span>
                <input type="text" name="name" placeholder="¿Cómo te llamas?" required />
              </label>
              <label>
                <span>Correo electrónico</span>
                <input type="email" name="email" placeholder="nombre@correo.com" required />
              </label>
              <label>
                <span>¿Qué deseas explorar?</span>
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Bienestar emocional</option>
                  <option>Hábitos y autocuidado</option>
                  <option>Saberes tradicionales</option>
                  <option>Orientación general</option>
                </select>
              </label>
              <label>
                <span>Mensaje</span>
                <textarea name="message" rows="3" placeholder="Cuéntanos brevemente..." required />
              </label>
              <button className="button button--gold"
              type="submit"
              disabled={state.submitting}>
                {state.submitting ? 'Enviando...' : 'Enviar solicitud'}
                {!state.submitting && <Icon name="arrow"/>}
                </button>
              {state.succeeded && (
                <p className="form-success" role="status">
                  <Icon name="check" /> ¡Gracias! Hemos recibido tu solicitud y te responderemos pronto.
                </p>
              )}
              {state.errors && (
                <p className="form-error" role="alert">
                  No pudimos enviar el formulario. Inténtalo nuevamente.
                </p>
              )}
              <p className="form-note">Este formulario es demostrativo. Conéctalo a tu correo, CRM o API para recibir mensajes reales.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <BrandMark />
          <p>Bienestar integral con humanidad, consciencia y propósito.</p>
          <p className="footer__legal">
            Quirónser ofrece acompañamiento complementario de bienestar. No sustituye diagnóstico, tratamiento ni atención de profesionales sanitarios.
          </p>
          <span>© {new Date().getFullYear()} Quirónser</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
