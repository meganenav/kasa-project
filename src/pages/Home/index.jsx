import Banner from '../../components/Banner'
import accommodations from '../../data/logements.json'
import Card from '../../components/Card'

function Home() {
    const listItems = accommodations.map((accommodation, index) =>
        <Card id={accommodation.id} key={index} title={accommodation.title} cover={accommodation.cover} />
    )
    
    return (    
        <div className="container container-home">
            <Banner page="home" title="Chez vous, partout et ailleurs" />
            <section className="container-accommodations">{listItems}</section>
        </div>
    )
}

export default Home