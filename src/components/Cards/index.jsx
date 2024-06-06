import accommodations from '../../data/logements.json';

function Cards() {
    const listItems = accommodations.map((accommodation, index) =>
        <article className="block-accommodation" key={index}>
            <img src={accommodation.cover} alt={accommodation.title}></img>
            <p className="title-accommodation">{accommodation.title}</p>
        </article>
    )
    return (
        <section className="container-accommodations">{listItems}</section>
    )
}

export default Cards