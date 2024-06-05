import '../../sass/global.scss';
import '../../sass/pages.scss';
import Banner from '../../components/Banner'
import Cards from '../../components/Cards'

function Home() {
    return (
        <div className="container container-home">
            <Banner />
            <Cards />
        </div>
    )
}

export default Home