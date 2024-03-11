export default function AllContacts() {
  return (
    <section id="all-contacts">
      <header className="section-header-centered centered">
        <h2>Kontakty</h2>
      </header>
      <div id="contacts-container">
        <h3>Ředitel festivalu</h3>
        <p className="contacts-info">
          Tomáš Beinhauer
          <br />
          <a className = "contact-links" href="mailto:reditel%40lesamaj.cz">reditel@lesamaj.cz</a>
        </p>

        <h3>Tým</h3>

        <p className="contacts-info">
          Tomáš Steinbauer
          <br />
          <a className = "contact-links" href="mailto:executive@lesamaj.cz">executive@lesamaj.cz</a>
        </p>

        <p className="contacts-info">
          Martin Urban
          <br />
          <a className = "contact-links" href="mailto:program@lesamaj.cz">program@lesamaj.cz</a>
        </p>

        <p className="contacts-info">
          Adriana Struminská
          <br />
          <a className = "contact-links" href="mailto:press@lesamaj.cz">press@lesamaj.cz</a>
        </p>

        <p className="contacts-info">
          Dan Petrok
          <br />
          <a className = "contact-links" href="mailto:spolky@lesamaj.cz">spolky@lesamaj.cz</a>
        </p>

        <p className="contacts-info">
          Iveta Hrdá
          <br />
          <a className = "contact-links" href="mailto:kreativci@lesamaj.cz">kreativci@lesamaj.cz</a>
        </p>

        <p className="contacts-info">
          Tomáš Vesecký
          <br />
          <a className = "contact-links" href="mailto:webmaster@lesamaj.cz">webmaster@lesamaj.cz</a>
        </p>

        <h3>Další kontakty</h3>
        <p className="contacts-info">
          Podcast
          <br />
          <a className = "contact-links" href="mailto:podcast@lesamaj.cz">podcast@lesamaj.cz</a>
        </p>

        <p className="contacts-info">
          Stavební soutěž
          <br />
          <a className = "contact-links" href="mailto:stavba@lesamaj.cz">stavba@lesamaj.cz</a>
        </p>

        <hr />
      </div>
    </section>
  );
}
