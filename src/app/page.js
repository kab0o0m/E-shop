import Navbar from "./Navbar";
import "./page.css";
import { Playfair_Display } from "next/font/google";
import { Strong, Em } from "@radix-ui/themes";
import CarouselComp from "./components/Carousel";
const pfDisplay = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <CarouselComp />

      <div className="showcase-2">
        <div className="showcase-2-1">
          <div className="showcase-2-1-img">
            <a href="/shop">
              <button className="shopnow-button">SHOP NOW</button>
            </a>
          </div>
          <p>Airpods</p>
        </div>
        <div className="showcase-2-2">
          <p>Headphones</p>

          <div className="showcase-2-2-img">
            <a href="/shop">
              <button className="shopnow-button">SHOP NOW</button>
            </a>
          </div>
        </div>
        <div className="showcase-2-3">
          <div className="showcase-2-3-img">
            <a href="/shop">
              <button className="shopnow-button">SHOP NOW</button>
            </a>
          </div>
          <p>Apple Watch</p>
        </div>
        <div className="showcase-2-4">
          <p>Accessories</p>
          <div className="showcase-2-4-img">
            <a href="/shop">
              <button className="shopnow-button">SHOP NOW</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
