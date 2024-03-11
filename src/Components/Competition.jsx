export default function Competition() {
  return (
    <section id="competition-container">
      <header className="section-header">
        <h2>Stavební soutěž</h2>
      </header>
      <button className="links comp-link" onClick={() => window.open("https://www.facebook.com/events/3967266630081026")}>
        Přijď postavit Lesamájové dřevostavby 💪 28. - 29. 4.
      </button>
      <p className="info">
        Studentský festival Lesamáj vyhlašuje 4. ročník stavební soutěže. Cílem
        je navrhnout trůn, bar s posezením a oddávací bránu (a detaily dle
        uvážení). Výherce získá od školy stipendium a od Lesamáje zdarma 1
        pivo/limo v den festivalu. Rovněž si zajistí příležitost přímo se
        podílet na realizaci svého návrhu ve spolupráci s katedrou dřevěných a
        ocelových konstrukcí. Celá soutěž se skládá za dvou kol. V prvním kole
        soutěžící odevzdají koncepty primárních návrhů předmětů. Termín
        odevzdání je 16. března. Den poté proběhne vyhodnocení návrhů. Ve druhém
        kole bude nad návrhu detailně řešena možná realizace a vytvoří se návrhy
        finální. Posledním krokem bude realizace dřevostavby těsně před
        festivalem. V rámci procesu budou jednotlivá řešení konzultována s
        architekty z oboru dřevostaveb pro udržení vyrobitelnosti a nákladové
        přijatelnosti stavby a s grafiky Lesamáje pro dodržení vizuální jednoty.
      </p>
      <h2 className="subheader">Kdo se může zapojit?</h2>
      <p className="info">
        Soutěž je otevřena všem studentům FSv a FA ČVUT. Pro studenty FA nebudou
        v letošním roce odměnou stipendia, pouze ceny za Lesamáj. Pro zapojení
        můžou soutěžící pracovat jednotlivě, nebo ve skupině. To specifikujte do
        přihlášky, kam se přihlásí všichni členové týmu.
      </p>
      <h2 className="subheader">Předměty návrhu</h2>
      <p className="info">
        Do prvního kola soutěže je potřeba přihlásit koncept návrhu (originální
        materiálové řešení/stavební postup, nebo nosnou ideu která vám pomůže
        návrh tvarovat). Inspirací může být předchozí ročník. Tam byl návrh
        postaven na trojúhelníkovém tvaru májky ztvárněném za pomoci štaflí.
        Tyto štafle tvořily základní konstrukční prvek sezení i barů.
        Neuchylujte se k renderům. Ideu je třeba jednoduše popsat a případně
        doprovodit jednoduchými skicami, nebo referenčními obrázky. Přesné
        parametry a finalizace návrhu budou náplní druhého kola soutěže.
      </p>
      <h3 className="subheader">Primární</h3>
      <ul className="info">
        <li>dřevostavby jako sezení pro návštěvníky festivalu před FSv</li>
        <li>
          nový bar se zázemím pro obsluhu zákazníků (velikostně vyhovující pro
          sudy a další vybavení) + zapojení konstrukce baru z minulého ročníku
        </li>
        <li>
          trůn pro korunovaci veličenstev Lesamáje na hlavní stagi - ve zbytku
          času sloužící pro čtecí Koutek
        </li>
      </ul>
      <h3 className="subheader">Sekundární</h3>
      <ul className="info">
        <li>zastínění studentské vesničky</li>
        <li>
          zdobená brána pro oddávání v rámci Lesamájových svateb - zároveň jako
          fotokoutek
        </li>
        <li>
          zapojení osvětlení do návrhů pro podtržení grafické stránky festivalu
        </li>
      </ul>
      <h2 className="subheader">Časový plán soutěže</h2>
      <table className="info comp-table">
        <tbody>
          <tr>
            <td>16. března 23:59</td>
            <td>online</td>
            <td>Uzávěrka přihlašování a odevzdání návrhů</td>
          </tr>
          <tr>
            <td>17. března 16:00</td>
            <td>D-A8</td>
            <td>Prezentace a výběr vítězů 1. kola</td>
          </tr>
          <tr>
            <td>18. března 11:00</td>
            <td>Ateliér D</td>
            <td>Workshop a zadání 2. kola</td>
          </tr>
          <tr>
            <td>24. - 26. března</td>
            <td>FSv</td>
            <td>Finalizace návrhů a vyhlášení 2. kola</td>
          </tr>
          <tr>
            <td>28. - 30. dubna</td>
            <td>plac před FSv</td>
            <td>
              Realizace stavby za účasti celého LSMJ týmu, soutěžících a
              dobrovolníků
            </td>
          </tr>
          <tr>
            <td>3. května</td>
            <td>Kampus Dejvice</td>
            <td>Festival Lesamáj</td>
          </tr>
        </tbody>
      </table>
      <form id="comp-form">
        <h2 className="comp-header">Registrační formulář</h2>
        <h3 className="subheader">Jméno a kontakt</h3>
        <input
          type="text"
          placeholder="Jméno a Příjmení"
          className="comp-input info"
        />
        <input
          type="text"
          placeholder="Fakulta/škola"
          className="comp-input info"
        />
        <input
          type="text"
          placeholder="Emailová adresa"
          className="comp-input info"
        />
        <h3 className="subheader">Komentář k návrhu</h3>
        <p className="info">
          Soubory k návrhu přikládejte buďo ihned přes odkaz (OneDrive,
          Úschovna, Dropbox ...), nebo zašlete na mail stavba@lesamaj.cz
        </p>
        <textarea
          type="text"
          placeholder="Účastníš se za tým, nebo jednotlivě? Co nám k návrhu chceš sdělit?"
          className="comp-input info"
          id="comments"
        />
        <button className="links comp-link">Odeslat přihlášku!</button>
      </form>
      <p className="info">
        Jakékoliv žádosti o konzultace, komentáře nebo otázky směřujte na mail
        stavba@lesamaj.cz 😊
      </p>
      <h3 className="subheader">Podcast o soutěži</h3>
      <iframe
        id="comp-podcast"
        src="https://podcasters.spotify.com/pod/show/lsmj-4/embed/episodes/LSMJ4-7-Architektka-Anna-Marie-ern---Stavebn-sout-e1vm735"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </section>
  );
}
