import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from 'react';


export default function Portfolio() {

    const [selected, setSelected] = useState("featured")

    const [data, setData] = useState([]);

    const list = [

        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content"
        }

    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(featuredPortfolio);
                break;
            case "mobile":
                setData(featuredPortfolio);
                break;
            case "design":
                setData(featuredPortfolio);
                break;
            case "content":
                setData(featuredPortfolio);
                break;
                default:
                    setData(featuredPortfolio);
        }

    },[selected])


    return (
        <div className="portfolio" id="portfolio">

            <h1>Portfolio</h1>
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
                <div className="item">
                    <img src="assets/pokemon.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/pokemon.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/pokemon.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/pokemon.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/pokemon.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/pokemon.png" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
            
        </div>
    )
}
