export default function Links() {
  return (
    <section>
      <header className="section-header-centered centered">
        <h2>Naše odkazy a stránky</h2>
      </header>
      <div id="links-container">
        <button
          className="links"
          onClick={() =>
            window.open(
              "https://open.spotify.com/artist/2QNnxjgdgUJbojXzoxUg6v?si=zMc7VB3xTDCQc1WFsdcXoQ&nd=1&dlsi=170c63e370c44f2d"
            )
          }
        >
          Rez-Spotify 🎶
        </button>
        <button
          className="links"
          onClick={() =>
            window.open(
              "https://open.spotify.com/artist/2QNnxjgdgUJbojXzoxUg6v?si=zMc7VB3xTDCQc1WFsdcXoQ&nd=1&dlsi=170c63e370c44f2d"
            )
          }
        >
          Postav s námi dřevostavby 💪 28. - 29. 4.{" "}
        </button>
        <button
          className="links"
          onClick={() =>
            window.open("https://www.facebook.com/events/3967266630081026")
          }
        >
          Podcast LSMJ/4 🎧
        </button>
        <button
          className="links"
          onClick={() => window.open("https://www.facebook.com/lesamajKD")}
        >
          Facebook
        </button>
        <button
          className="links"
          onClick={() => window.open("https://www.instagram.com/lesamaj/")}
        >
          Instagram
        </button>
        <button
          className="links"
          onClick={() => window.open("https://www.youtube.com/@lesamaj8390")}
        >
          YouTube
        </button>
      </div>
    </section>
  );
}
