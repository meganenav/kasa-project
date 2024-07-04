import { NavLink } from 'react-router-dom'

//Création du composant Error pour afficher une page 404 avec lien de retour vers la page d'accueil
function Error() {
    return (
        <div className="container-error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    )
}
 
export default Error