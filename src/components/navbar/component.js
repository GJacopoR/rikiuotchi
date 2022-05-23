import { Link } from "react-router-dom"

export default function Navbar(){
    return <section>
        <div>
            <h1>
                APProde!
            </h1>
        </div>
        <div>
            <Link to={'/wheel'}>
                Wheel
            </Link>
        </div>
    </section>
}