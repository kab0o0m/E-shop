import Navbar from "../Navbar";
import "./page.css";

export default function Shop() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="shop">
        <div className="shop-header">
          <a href="/">Home</a>
          <div>/</div>
          <div className="shop-header-page">
            <p>Shop</p>
          </div>
        </div>
      </div>
    </>
  );
}
