const links = [
  { href: "#nettverket", label: "Nettverket" },
  { href: "#arbeidet", label: "Aktiviteter" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Home() {
  return <>
    <a href="#innhold" className="skip">Hopp til innhold</a>
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="wordmark" href="#innhold">Arctic Defence<br /><span>Partners</span></a>
        <nav aria-label="Hovedmeny">{links.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}</nav>
      </div>
    </header>
    <main id="innhold" tabIndex={-1}>
      <section className="hero" aria-labelledby="main-title">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Forhåndsvisning · Nord-Norge</p>
            <h1 id="main-title">Samarbeid om beredskap i nord</h1>
            <p>Arctic Defence Partners samler nordnorske virksomheter og fagmiljøer som vil samarbeide om forsvar, sikkerhet og beredskap.</p>
            <a className="action" href="#kontakt">Spør om medlemskap</a>
          </div>
          <svg className="ridge" viewBox="0 0 520 440" aria-hidden="true" focusable="false">
            <path className="ridge-fill" d="M0 344 64 322 114 272 166 292 207 240 252 256 298 190 330 213 382 151 410 173 448 146 520 204V440H0Z" />
            <path d="M0 344 64 322 114 272 166 292 207 240 252 256 298 190 330 213 382 151 410 173 448 146 520 204M0 370 90 350 133 306 172 319 221 278 268 287 305 230 345 249 398 190 422 211 459 182 520 236M0 395 101 381 147 338 187 348 233 308 279 321 320 274 356 285 407 230 436 247 469 220 520 270" />
            <circle cx="382" cy="151" r="5" />
          </svg>
        </div>
      </section>
      <section id="nettverket" className="wrap body-section split">
        <div><p className="eyebrow">Nettverket</p><h2>En felles plattform for Nord-Norge</h2></div>
        <div>
          <p>Arctic Defence Partners er en ideell forening med base i Hammerfest. Målet er å gjøre det enklere for bedrifter, fagmiljøer og samfunnsaktører å samarbeide på tvers av landsdelen.</p>
          <p>Foreningen samarbeider med søsternettverket <a href="https://www.arcticenergy.net/arctic-energy-partners">Arctic Energy Partners</a>.</p>
        </div>
      </section>
      <section id="arbeidet" className="topics">
        <div className="wrap body-section split">
          <div><p className="eyebrow">Aktiviteter</p><h2>Slik jobber nettverket</h2></div>
          <dl>
            <div><dt>Partnerskap</dt><dd>Koble bedrifter og fagmiljøer på tvers av bransjer og fylker.</dd></div>
            <div><dt>Innovasjon</dt><dd>Skape rom for å utvikle og prøve ut nye ideer i samarbeid.</dd></div>
            <div><dt>Møteplasser i nord</dt><dd>Samle næringsliv og samfunnsaktører for å dele erfaringer og samordne arbeidet.</dd></div>
          </dl>
        </div>
      </section>
      <section id="kontakt" className="wrap body-section split">
        <div><p className="eyebrow">Kontakt</p><h2>Vil dere bli med?</h2></div>
        <div>
          <p>Ta kontakt med nettverket hvis dere vil vite mer om medlemskap eller samarbeid.</p>
          <a className="action" href="mailto:kg@arcticenergy.net">Send e-post til nettverket</a>
          <p className="address">Sjøgata 9, 9600 Hammerfest</p>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="wrap footer-inner">
      <span>Arctic Defence Partners · org.nr. 938 783 942</span>
      <a href="https://virksomhet.brreg.no/nb/oppslag/enheter/938783942">Se foreningen i Brønnøysundregistrene</a>
    </div></footer>
  </>;
}
