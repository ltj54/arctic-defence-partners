import Image from "next/image";
import logo from "./arctic-defence-partners-logo.png";
import harbor from "./finnmark-havn.webp";
import SiteMenu from "./site-menu";

const sectionIds = {
  main: "innhold",
  network: "nettverket",
  activities: "arbeidet",
  members: "medlemmer",
  board: "styret",
  partners: "samarbeid",
  contact: "kontakt",
} as const;

const links = [
  { href: `#${sectionIds.network}`, label: "Nettverket" },
  { href: `#${sectionIds.activities}`, label: "Aktiviteter" },
  { href: `#${sectionIds.members}`, label: "Medlemmer" },
  { href: `#${sectionIds.contact}`, label: "Kontakt" },
];

const activities = [
  "En samlet nordnorsk leverandørplattform",
  "Industrielle partnerskap og konsortier",
  "Innovasjon, teknologi og pilotprosjekter",
  "Nordnorske møteplasser og koordinering",
  "Bred forankring i hele landsdelen",
];

const members = [
  "Arctic Energy Partners",
  "Asko Nord AS",
  "Barel AS",
  "Finnmark fylkeskommune",
  "Handelshøgskolen ved Nord universitet",
  "Heatwork AS",
  "LO Nord-Norge",
  "NHO Arktis",
  "Momek AS",
  "Polarkonsult AS",
  "Rapp Bomek AS",
  "Tromsø havn KF",
  "Universitetet i Tromsø – Norges arktiske universitet",
];

export default function Home() {
  const contactFormEnabled = process.env.ADP_ENABLE_CONTACT_FORM === "true";

  return <>
    <a href={`#${sectionIds.main}`} className="skip">Hopp til innhold</a>
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="wordmark" href={`#${sectionIds.main}`}>
          <Image src={logo} alt="Arctic Defence Partners" loading="eager" />
        </a>
        <SiteMenu links={links} />
      </div>
    </header>
    <main id={sectionIds.main} tabIndex={-1}>
      <section className="wrap hero" aria-labelledby="main-title">
        <Image className="hero-image" src={harbor} alt="" fill loading="eager" fetchPriority="high" />
        <div className="hero-copy">
          <h1 id="main-title">Forsvarsleveranser <span>fra nord</span></h1>
          <p>Nord-Norge står midt i det største forsvars- og beredskapsløftet i moderne tid. Arctic Defence Partners samler nordnorske leverandører for å bidra til flere forsvarsleveranser fra nord.</p>
        </div>
        <Image className="hero-logo" src={logo} alt="" loading="eager" />
      </section>
      <nav className="wrap quick-links" aria-label="Snarveier">
        <a className="action" href="mailto:hilde@sjurelv.no">Bli medlem</a>
        <a className="action" href={`#${sectionIds.activities}`}>Våre aktiviteter</a>
        <a className="action" href={`#${sectionIds.contact}`}>Kontakt oss</a>
      </nav>
      <div className="wrap overview">
        <section id={sectionIds.network} className="overview-panel" tabIndex={-1}>
          <h2>Nettverket</h2>
          <p>Arctic Defence Partners er en ideell forening med styre, medlemmer og stiftere. Nettverket skal samarbeide med næringslivet, Forsvaret, samfunnsaktører og andre som har forsvar og beredskap som marked eller interessefelt.</p>
          <p>Sammen med leverandørindustrien, Forsvaret og Forsvarets hovedleverandører skal nettverket legge til rette for størst mulige nordnorske ringvirkninger fra forsvarsleveranser og forsvarsaktiviteter i nord.</p>
        </section>
        <section id={sectionIds.activities} className="overview-panel" tabIndex={-1}>
          <h2>Våre aktiviteter</h2>
          <ul className="activities">
            {activities.map((activity) => <li key={activity}>{activity}</li>)}
          </ul>
        </section>
        <section id={sectionIds.members} className="overview-panel" tabIndex={-1}>
          <h2>Medlemmer</h2>
          <ul className="details-list">
            {members.map((member) => <li key={member}>{member}</li>)}
          </ul>
        </section>
      </div>
      <section id={sectionIds.board} className="topics" tabIndex={-1}>
        <div className="wrap body-section split">
          <h2>Styret</h2>
          <div>
            <ul className="details-list">
              <li>Kjell Giæver, styreleder – Arctic Energy Partners</li>
              <li>Kurt Kristoffersen – Rapp Bomek</li>
              <li>Fredrik Holtet Lien – Polarconsult</li>
              <li>Merete Kristiansen – Akvaplan Niva</li>
              <li>Grete Ovanger – ASKO Nord</li>
            </ul>
            <h3>Varamedlemmer</h3>
            <ul className="details-list">
              <li>Bente Haug – UiT Alta</li>
              <li>Reidar Schille – Heatworks</li>
            </ul>
          </div>
        </div>
      </section>
      <section id={sectionIds.partners} className="wrap body-section split" tabIndex={-1}>
        <h2>Samarbeid</h2>
        <div>
          <p>Arctic Defence Partners samarbeider med søsternettverket <a href="https://www.arcticenergy.net/arctic-energy-partners">Arctic Energy Partners</a>. Denne modellen har bidratt til leverandøretableringer.</p>
          <dl>
            <div>
              <dt>KUPA AS</dt>
              <dd>KUPA jobber for økt konkurransekraft og industriutvikling i Nord-Norge. Forsvarsinkubatoren gir bedrifter tilgang til kompetanse, verktøy og nettverk for å møte forsvarssektorens krav og behov. Programmer som IndustriX gir støtte til internasjonalisering og markedsutvikling. KUPA har kontorer i Narvik, Harstad og Tromsø.</dd>
            </div>
            <div>
              <dt>KPB</dt>
              <dd>KPB bistår norske selskaper med analyser som kombinerer aktuelle data med regional og lokal kunnskap. KPB holder til i Bodø.</dd>
            </div>
            <div>
              <dt>Norinnova</dt>
              <dd>Norinnova jobber med kommersialisering av forskning og kobler forskere, oppstartsmiljøer, bedrifter og kommersielle aktører. Norinnova holder til i Tromsø.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section id={sectionIds.contact} className="topics" tabIndex={-1}>
        <div className="wrap body-section">
          <h2>Kontakt oss</h2>
          <div className="contact-grid">
            <form
              className="contact-panel contact-form"
              action={contactFormEnabled ? "https://formsubmit.co/kg@arcticenergy.net" : undefined}
              method="post"
              autoComplete="on"
              aria-labelledby="contact-form-title"
              aria-describedby="contact-form-note"
            >
              <h3 id="contact-form-title">Send en melding</h3>
              <p id="contact-form-note">
                {contactFormEnabled
                  ? "Meldingen sendes via FormSubmit. Unngå å oppgi sensitive opplysninger."
                  : "Du kan prøve feltene her. Bruk kontaktinformasjonen på siden for å sende en henvendelse."}
              </p>
              <fieldset aria-labelledby="contact-form-title">
                {contactFormEnabled && <input type="hidden" name="_subject" value="Henvendelse til Arctic Defence Partners" />}
                <label>
                  <span>Navn</span>
                  <input name="name" autoComplete="name" maxLength={120} required />
                </label>
                <label>
                  <span>E-post</span>
                  <input type="email" name="email" autoComplete="email" maxLength={254} required />
                </label>
                <label>
                  <span>Melding</span>
                  <textarea name="message" rows={5} maxLength={4000} required />
                </label>
                <button className="action" type="submit" disabled={!contactFormEnabled}>Send melding</button>
              </fieldset>
            </form>
            <div className="contact-panel contact-details">
              <h3>Kontaktinformasjon</h3>
              <p>Vil dere bli medlem? Send en e-post til <a href="mailto:hilde@sjurelv.no">Hilde Sjurelv</a>.</p>
              <dl>
                <div>
                  <dt>Kjell Giæver</dt>
                  <dd><a href="tel:+4795154900">+47 951 54 900</a><br /><a href="mailto:kg@arcticenergy.net">kg@arcticenergy.net</a></dd>
                </div>
                <div>
                  <dt>Hilde Sjurelv</dt>
                  <dd><a href="tel:+4791321000">+47 913 21 000</a><br /><a href="mailto:hilde@sjurelv.no">hilde@sjurelv.no</a></dd>
                </div>
                <div>
                  <dt>Besøk oss</dt>
                  <dd>Sjøgata 9, 5. etasje<br />9600 Hammerfest<br />Inngang via Nissensenteret eller Storgata.</dd>
                </div>
                <div>
                  <dt>Postadresse</dt>
                  <dd>Postboks 301 Sentrum<br />9615 Hammerfest</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="wrap footer-inner">
      <a className="wordmark" href={`#${sectionIds.main}`}><Image src={logo} alt="Arctic Defence Partners" /></a>
      <nav aria-label="Bunnmeny">
        <a href="mailto:hilde@sjurelv.no">Bli medlem</a>
        <a href={`#${sectionIds.partners}`}>Samarbeid</a>
        <a href={`#${sectionIds.contact}`}>Kontakt oss</a>
      </nav>
    </div></footer>
  </>;
}
