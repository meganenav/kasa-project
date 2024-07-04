import { Link } from 'react-router-dom'

/*Création du composant réutilisable "Card" permettant d'afficher la miniature pour avoir les détails de chaque logement après clic
Transmission des propriétés avec l'id du logement pour le lien, l'URL de l'image et le nom du logement
*/
function Cards(props) {
    return (
        <Link to={ `/accommodation/${props.id}` } key={ props.index }>
            <article className="block-accommodation">
                <img src={ props.cover } alt={ props.title }></img>
                <p className="title-accommodation">{ props.title }</p>
            </article>
        </Link>
    )
}

export default Cards