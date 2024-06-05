import logo from '../../images/LOGO_footer.svg';
import '../../sass/footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <img src={logo} alt="Logo" className="logo-footer" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}
 
export default Footer