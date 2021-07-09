import "./topbar.scss";
import { LinkedIn, Description, GitHub } from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">danielreza</a>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/daniel-reza-974b53a2/" target="_blank">
                            <LinkedIn className="icon"/>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/danielrezz" target="_blank">
                            <GitHub className="icon"/>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="/assets/myResume2021.pdf" target="_blank">
                            <Description className="icon"/>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
