import Navbar from "./Navbar";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="showcase">
        <div className="showcase-big">
          <h1>Iphone Series</h1>
          <a href="/shop">
            <button>SHOP NOW</button>
          </a>
        </div>
        <div className="showcase-small">
          <div className="showcase-small-1">
            <h2 className="speakers">Speakers</h2>
            <h4 className="mini-home">mini home</h4>
          </div>
          <div className="showcase-small-2">
            <h4 className="high-quality">high quality</h4>
            <h2 className="sounds">Sounds</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
