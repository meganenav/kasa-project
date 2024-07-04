import { useEffect } from 'react'
import Banner from '../../components/Banner'
import accommodations from '../../data/logements.json'
import Card from '../../components/Card'

/*Création de l'affichage de la page d'accueil avec réalisation d'un map sur les données récupérées dans le fichier JSON
qui affiche les miniatures des images des logements sous forme de "card" qui envoie lors du clic vers la page du logement en question.
Appel au composant Card avec passage des props à utiliser et à la bannière de la page. */
function Home() {
    const listItems = accommodations.map((accommodation, index) =>
        <Card id={ accommodation.id } key={ index } title={ accommodation.title } cover={ accommodation.cover } />
    )
    
    useEffect(() => 
        { document.title="Kasa - Page d'accueil" }
    )

    return (    
        <div className="container container-home">
            <Banner page="home" title="Chez vous, partout et ailleurs" />
            <section className="container-accommodations">{ listItems }</section>
        </div>
    )
}

export default Home