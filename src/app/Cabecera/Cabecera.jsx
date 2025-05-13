import Link from "next/link"
import "./cabecera.css"

export default function Cabecera() {
    return (
        <>
            <div className="cabecera">
                <div>
                    <img className="logo" src="./img/logoOrt.png">
                    </img>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href="./peliculas"> Ver Peliculas</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <img className="usuario" src="./img/user.jpg">
                    </img>
                </div>
            </div>
        </>
    )
}