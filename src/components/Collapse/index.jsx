import React, { useState } from 'react'
import arrowHide from '../../images/arrow_hide.svg'

/*Création du composant réutilisable accordéon avec utilisation du hook useState pour en gérer l'état d'ouverture / fermeture
Transmission des propriétés titre de l'accordéon et description
Utilisation d'une ternaire pour afficher ou non la class description-show permettant d'afficher la description*/
function Collapse(props) {
    const title = props.title
    const description = props.description

    const [isActive, setIsActive] = useState(false)

    return (
        <article className="collapse">
            <div className="collapse-title-block">
                <p>{ title }</p>
                <img src={ arrowHide } className="arrow" alt="Flèche pour gérer l'accordéon" onClick={ () => setIsActive(!isActive) }></img>
            </div>
            <div className={ isActive ? "collapse-description-block description-show" : "collapse-description-block" }>
                { description }
            </div>
        </article>
    )
}
export default Collapse