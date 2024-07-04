import { NavLink } from 'react-router-dom'
import '../../sass/main.scss'
import logo from '../../images/LOGO.svg'

/*Création du composant Header avec la navigation utilisant le composant natif NavLink et 
une ternaire pour vérifier si le lien est actif et le styliser en conséquence*/
function Header() {
    return (
        <header>
            <img src={ logo } alt="Logo" className="logo-header" />
            <nav>
                <NavLink to="/" className={ ({ isActive }) => isActive ? "active-link" : "" }>Accueil</NavLink>
                <NavLink to="/about" className={ ({ isActive }) => isActive ? "active-link" : "" }>A propos</NavLink>
            </nav>
        </header>
    )
}
 
export default Header