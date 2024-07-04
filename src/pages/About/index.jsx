import { useEffect } from 'react'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

/*On crée les données des accordéons à part dans un tableau d'objets pour afficher la page A propos.
On effectue un map sur le tableau pour utiliser les données.
On appelle le composant Banner avec les bonnes props à transmettre.
On appelle le composant Collapse avec les données qu'on a crées au début qu'on veut transmettre. */
function About() {
    const dataArray = 
    [
        {
            "index": "0",
            "title": "Fiabilité",
            "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
        },
        {
            "index": "1",
            "title": "Respect",
            "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            "index": "2",
            "title": "Service",
            "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            "index": "3",
            "title": "Sécurité",
            "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        }
    ]

    useEffect(() => 
        { document.title="Kasa - Page À propos" }
    )

    const aboutCollapse=dataArray.map(data =>
        <Collapse key={ data.index } title={ data.title }
        description={ <p>{ data.description }</p> } />
    )

    return (
        <div className="container container-about">
            <Banner page="about" />
            <section className="container-collapse">
                { aboutCollapse }
            </section>
        </div>
    )
}
 
export default About