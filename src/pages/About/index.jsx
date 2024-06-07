import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

function About() {
    const dataArray = 
    [
        {
            "index": "0",
            "element": "fiabilite",
            "title": "Fiabilité",
            "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
        },
        {
            "index": "1",
            "element": "respect",
            "title": "Respect",
            "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            "index": "2",
            "element": "service",
            "title": "Service",
            "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            "index": "3",
            "element": "securite",
            "title": "Sécurité",
            "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        }
    ]
    const aboutCollapse = dataArray.map(data =>
        <Collapse key={data.index} element={data.element} title={data.title}
        description={<p>{data.description}</p>} />
    )
    return (
        <div className="container container-about">
            <Banner page="about" />
            <section className="container-collapse">
                {aboutCollapse}
            </section>
        </div>
    )
}
 
export default About