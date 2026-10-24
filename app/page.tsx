const themes = [
  {
    name: "Safari baby",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
    className: "theme-card--safari",
  },
  {
    name: "Fundo do mar",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=85",
    className: "theme-card--ocean",
  },
  {
    name: "Jardim encantado",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
    className: "theme-card--garden",
  },
  {
    name: "Diversão colorida",
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=900&q=85",
    className: "theme-card--colorful",
  },
];

const kitItems = [
  "1 bolo de 15 fatias, com recheios tradicionais",
  "50 docinhos de festa, sabores tradicionais",
  "Topo de bolo 3D com “Parabéns” ou nome do aniversariante, apliques e idade opcional",
  "25 topos para docinhos ou cupcakes com elementos no tema",
  "9 mini chapeuzinhos para decorar docinhos ou cupcakes",
  "2 enfeites de mesa com aproximadamente 25 cm",
  "1 varal de elementos no tema, com cerca de 10 cm",
  "1 varal de personagens com cerca de 14 cm",
  "1 varal 3D personalizado com “Parabéns” ou nome de até 10 letras, acompanhado de apliques",
];

const allThemes = [
  "Bluey",
  "Patrulha Canina",
  "Homem-Aranha",
  "Vingadores",
  "Toy Story",
  "Shrek",
  "Stitch",
  "A Casa Mágica da Gabby",
  "Baby Shark",
  "Branca de Neve baby",
  "Hello Kitty",
  "Harry Potter",
  "Mickey",
  "Moranguinho",
  "Ursinho Pooh",
  "Floresta encantada",
  "Fundo do mar",
  "Dino baby",
  "Safari",
  "Dinossauros",
  "Fazendinha",
  "Abelhinhas",
];

const orderMessage =
  "Olá, gostaria de encomendar meu kit festa Cake Mania + Papelin!";
const orderLink = `https://wa.me/5551992242956?text=${encodeURIComponent(orderMessage)}`;

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#temas">Temas</a>
          <a href="#kit">O que vem no kit</a>
          <a href="#lista-temas">Todos os temas</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              CAKE MANIA + PAPELIN OFICINA CREATIVA APRESENTAM
            </span>
            <h1>
              Kit festinha
              <br />
              <span>completa!</span>
            </h1>
            <p className="hero-checklist">
              Bolo? Temos! <span>•</span> Docinhos? Também! <span>•</span>
              <br className="mobile-break" /> Decoração linda? É claro!
            </p>
            <p className="hero-description">
              Preparamos um combo especial que une o melhor da confeitaria com
              a magia da papelaria personalizada. Festa completa sem quebrar a
              cabeça.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href={orderLink} target="_blank" rel="noreferrer">
                Quero minha festinha! <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#temas">
                Escolha seu tema <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="photo-disclaimer">
              Imagens ilustrativas. A decoração é personalizada no tema
              escolhido.
            </p>
            <div className="hero-note">
              <span className="note-stars" aria-hidden="true">
                ✳
              </span>
              Você cuida dos abraços e das fotos.
              <br />
              A gente deixa sua festinha incrivel!
            </div>
          </div>
          <div className="hero-art">
            <div
              className="hero-photo"
              role="img"
              aria-label="Mesa de festa colorida com bolo e decoracao"
            />
            <div className="photo-label">
              <span className="label-sparkle" aria-hidden="true">
                ✳
              </span>
              <span>
                feita para
                <br />
                celebrar!
              </span>
            </div>
            <span className="art-sparkle art-sparkle--one" aria-hidden="true">
              ✳
            </span>
            <span className="art-sparkle art-sparkle--two" aria-hidden="true">
              ✦
            </span>
            <span className="art-sparkle art-sparkle--three" aria-hidden="true">
              •
            </span>
          </div>
          <a className="scroll-cue" href="#temas">
            <span aria-hidden="true">↓</span> UM MUNDO DE TEMAS
          </a>
        </section>

        <section className="themes-section" id="temas">
          <div className="section-wrap">
            <div className="section-heading themes-heading">
              <div>
                <span className="eyebrow">A SUA FESTA, DO SEU JEITINHO</span>
                <h2>
                  Um tema para
                  <br />
                  <span>chamar de seu.</span>
                </h2>
              </div>
              <p>
                Dos personagens favoritos aos cenários encantados: escolha o
                tema e a gente cuida de cada detalhe.
              </p>
            </div>
            <div className="theme-grid">
              {themes.map((theme, index) => (
                <article
                  className={`theme-card ${theme.className}`}
                  key={theme.name}
                  style={{ backgroundImage: `url("${theme.image}")` }}
                >
                  <span className="theme-number">0{index + 1}</span>
                  <h3>{theme.name}</h3>
                </article>
              ))}
            </div>
            <a className="themes-more" href="#lista-temas">
              Tem muito mais para escolher <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="kit-section section-wrap" id="kit">
          <div className="kit-intro">
            <span className="eyebrow">TUDO COMBINANDO, TUDO RESOLVIDO</span>
            <h2>
              O que vem
              <br />
              <span>no kit?</span>
            </h2>
            <p>
              Uma festa linda do começo ao parabéns — com delícias e detalhes
              personalizados no tema que você escolher.
            </p>
            <a className="button button--dark" href={orderLink} target="_blank" rel="noreferrer">
              Quero minha festinha! <span aria-hidden="true">↗</span>
            </a>
            <div className="kit-stamp" aria-hidden="true">
              <span>UM KIT</span>
              <strong>cheio de</strong>
              <span>CARINHO ✳</span>
            </div>
          </div>
          <div className="kit-list-wrap">
            <div className="kit-list-heading">
              <span className="kit-list-icon" aria-hidden="true">
                ✳
              </span>
              <div>
                <strong>Uma festa completinha</strong>
                <span>Olha só quanta coisa boa!</span>
              </div>
              <span className="kit-count">09 ITENS</span>
            </div>
            <ul className="kit-list">
              {kitItems.map((item, index) => (
                <li key={item}>
                  <span className="item-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                  <span className="item-index">0{index + 1}</span>
                </li>
              ))}
            </ul>
            <p className="kit-footnote">
              Personalizamos os detalhes para combinar com o tema escolhido.
            </p>
          </div>
        </section>

        <section className="catalog-section" id="lista-temas">
          <div className="section-wrap catalog-inner">
            <div className="catalog-heading">
              <span className="eyebrow">AQUI TEM O TEMA FAVORITO</span>
              <h2>
                Qual vai ser
                <br />
                <span>a sua aventura?</span>
              </h2>
              <p>
                Escolha um tema da lista e imagine a alegria de ver tudo
                combinando.
              </p>
            </div>
            <ul className="theme-pills">
              {allThemes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
            <div className="catalog-cta">
              <span>Seu tema não está aqui? Consulte outras opções.</span>
              <a className="button button--primary" href={orderLink} target="_blank" rel="noreferrer">
                Quero minha festinha! <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-decoration closing-decoration--left" aria-hidden="true">
            ✳
          </div>
          <div className="closing-copy">
            <span className="eyebrow">VOCÊ APROVEITA CADA MOMENTO</span>
            <h2>
              A festa fica
              <br />
              <span>por nossa conta.</span>
            </h2>
            <p>
              Mais tempo para os abraços, as brincadeiras e as fotos. A sua
              festinha completa começa aqui!
            </p>
            <a className="button button--primary" href={orderLink} target="_blank" rel="noreferrer">
              Quero minha festinha! <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="closing-decoration closing-decoration--right" aria-hidden="true">
            ✦
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Feito para celebrar os momentos mais doces.</span>
        <a href="#inicio">Voltar ao início ↑</a>
      </footer>
      <a
        className="floating-cta"
        href={orderLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Quero minha festinha! Fale conosco pelo WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a9.7 9.7 0 0 0-8.3 14.7L2.4 22l5.4-1.4A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 19.8Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.2 1.6 2.5 3.9 3.4.6.3 1.1.4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.5-.2Z" />
        </svg>
        <span>Quero minha festinha!</span>
      </a>
    </>
  );
}
