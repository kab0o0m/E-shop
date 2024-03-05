import Navbar from "./Navbar";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="showcase">
        <div className="showcase-big">
          <p>Iphone Series</p>

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

      <div className="showcase-2">
        <div className="showcase-2-1">
          <div className="showcase-2-1-img">
            <a href="/shop">
              <button>SHOP NOW</button>
            </a>
          </div>
          <p>Airpods</p>
        </div>
        <div className="showcase-2-2">
          <p>Headphones</p>

          <div className="showcase-2-2-img">
            <a href="/shop">
              <button>SHOP NOW</button>
            </a>
          </div>
        </div>
        <div className="showcase-2-3">
          <div className="showcase-2-3-img">
            <a href="/shop">
              <button>SHOP NOW</button>
            </a>
          </div>
          <p>Apple Watch</p>
        </div>
        <div className="showcase-2-4">
          <p>Accessories</p>
          <div className="showcase-2-4-img">
            <a href="/shop">
              <button>SHOP NOW</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
