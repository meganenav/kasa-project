import '../../sass/global.scss';
import '../../sass/header.scss';
import logo from '../../images/LOGO.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className="logo-header" />
            <nav>
                <a href="/">Accueil</a>
                <a href="/about">A propos</a>
            </nav>
        </header>
    )
}
 
export default Header