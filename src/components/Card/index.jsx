import { Link } from 'react-router-dom'

function Cards(props) {
    return (
        <Link to={`/accommodation/${props.id}`} key={props.index}>
            <article className="block-accommodation">
                <img src={props.cover} alt={props.title}></img>
                <p className="title-accommodation">{props.title}</p>
            </article>
        </Link>
    )
}

export default Cards