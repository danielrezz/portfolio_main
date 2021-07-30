import "./topbar.scss";
import { LinkedIn, Description, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <sup>daniel</sup>
            <sub>reza</sub>
          </a>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/daniel-reza/" target="_blank" rel="noreferrer">
              <LinkedIn className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/danielrezz" target="_blank" rel="noreferrer">
              <GitHub className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="/assets/resumeDAR.pdf" target="_blank" rel="noreferrer">
              <Description className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
