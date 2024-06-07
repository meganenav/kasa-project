import { Link } from 'react-router-dom';
import accommodations from '../../data/logements.json';

function Cards() {
    const listItems = accommodations.map((accommodation, index) =>
        <Link to={`/accommodation/${accommodation.id}`} key={index}>
            <article className="block-accommodation">
                <img src={accommodation.cover} alt={accommodation.title}></img>
                <p className="title-accommodation">{accommodation.title}</p>
            </article>
        </Link>
    )
    return (
        <section className="container-accommodations">{listItems}</section>
    )
}

export default Cards