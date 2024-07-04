import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import accommodations from '../../data/logements.json'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Slideshow from '../../components/Slideshow'

/*Création de l'affichage de la page d'un logement
Récupération de l'id dans le lien grâce à useParams et 
utilisation de la fonction filter sur cet id pour trouver les informations du logement dans le fichier des données.
Si on ne trouve pas de résultats, on renvoie vers la page 404.
Utilisation de la fonction map pour créer les éléments de la page avec les données du logement.
Appel aux composants Slideshow pour le carrousel d'images avec envoi des props, Rating pour la notation avec passage de la note en props
et les Collapse pour les accordéons description du logement et équipements avec passage des props.*/
function Accommodation() {
    useEffect(() => 
        { document.title="Kasa - Page d'un logement" }
    )
    const { id } = useParams()
    const accommodationData = accommodations.filter(element =>
        element.id === id
    )
    if(accommodationData.length === 0) {
        return <Navigate to="/404" />
    }
    const accommodation = accommodationData.map(data =>
        <div className="container container-accommodation" key={ data.id }>
            <Slideshow cover={ data.cover } alt={ data.title } pictures={ data.pictures } />
            <section className="accommodation-informations">
                <div className="accommodation-general">
                    <h1>{data.title}</h1>
                    <p className="location">{ data.location }</p>
                    <div className="tags">
                        { data.tags.map((tag, index) => 
                            <span key={ index } className="tagElement">{ tag }</span>
                        ) }
                    </div>
                </div>
                <div className="owner-infos">
                    <div className="accommodation-owner">
                        <div className="owner">
                            <p className="host-name">{ data.host.name }</p>
                            <img src={ data.host.picture } alt={ data.host.name } className="host-picture"></img>
                        </div>
                    </div>
                    <Rating number={ data.rating } />
                </div>
            </section>
            <section className="container-collapse">
                <Collapse element="description" title="Description" description={ <p>{ data.description }</p> } />
                <Collapse element="equipments" title="Équipements" description={ <ul> { data.equipments.map((equipment, index) => <li key={ index }>{ equipment }</li>) } </ul> }/>
            </section>
        </div>
    )
    return (
        <>{ accommodation }</>
    )
}
 
export default Accommodation