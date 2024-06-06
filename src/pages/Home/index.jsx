import Banner from '../../components/Banner'
import Cards from '../../components/Cards'

function Home() {
    return (
        <div className="container container-home">
            <Banner page="home" title="Chez vous, partout et ailleurs" />
            <Cards />
        </div>
    )
}

export default Home