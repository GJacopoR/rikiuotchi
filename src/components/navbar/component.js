import { Link } from "react-router-dom";
import classes from "./style.module.css";
import "./style.module.css";

export default function Navbar(){
    return <section className={classes.navContainer}>
        <Link to={'/'} className={classes.homeLink}>
            <h1>
                APProde!
            </h1>
        </Link>
        <div className={classes.linksContainer}>
            <Link to={'/wheel'} className={classes.link}>
                Wheel
            </Link>
        </div>
    </section>
}