import './portfolioList.scss'
import '../portfolio/portfolio.scss'

export default function PortfolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "portfolioList active" : "portFolioList"} 
        onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
