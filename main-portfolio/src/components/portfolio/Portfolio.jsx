import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import { webDevPortfolio, audioPortfolio, musicPortfolio } from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("webDev");

  const [data, setData] = useState([]);

  const list = [
    {
      id: "webDev",
      title: "Web Development",
    },
    {
      id: "audio",
      title: "Audio Production",
    },
    {
      id: "music",
      title: "Music",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "webDev":
        setData(webDevPortfolio);
        break;
      case "audio":
        setData(audioPortfolio);
        break;
      case "music":
        setData(musicPortfolio);
        break;
      default:
        setData(webDevPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects</h2>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank" rel="noreferrer">
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
