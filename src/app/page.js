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
      <div className="mx-auto flex flex-col mb-32">
        <h1 className="text-[50px] font-light mx-auto">Discover More</h1>
        <h1
          className={`${pfDisplay.className} text-[28px] font-light mx-auto -mt-3`}
        >
          <Em>
            from <Strong className="font-semibold">Volt</Strong>
          </Em>
        </h1>
      </div>
      <div className="showcase-2">
        <div className="showcase-2-1">
          <div className="showcase-2-1-img">
            <a href="/shop">
              <button className="shopnow-button">Shop Airpods</button>
            </a>
          </div>
          <p className="text-[30px]">Airpods</p>
        </div>
        <div className="showcase-2-2">
          <p className="text-[30px]">Headphones</p>

          <div className="showcase-2-2-img">
            <a href="/shop">
              <button className="shopnow-button font-semibold">
                Shop Headphones
              </button>
            </a>
          </div>
        </div>
        <div className="showcase-2-3">
          <div className="showcase-2-3-img">
            <a href="/shop">
              <button className="shopnow-button">Shop Watch</button>
            </a>
          </div>
          <p className="text-[30px]">Apple Watch</p>
        </div>
        <div className="showcase-2-4">
          <p className="text-[30px]">Accessories</p>
          <div className="showcase-2-4-img">
            <a href="/shop">
              <button className="shopnow-button">Shop Accessories</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
