import { useParams, Navigate } from "react-router-dom";
import accommodations from '../../data/logements.json';
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Slideshow from '../../components/Slideshow'

function Accommodation() {
    const { id } = useParams();
    const accommodationData = accommodations.filter(element =>
        element.id === id
    )
    if(accommodationData.length === 0) {
        return <Navigate to="/404" />
    }
    const accommodation = accommodationData.map(data =>
        <div key={data.id}>
            <Slideshow cover={data.cover} alt={data.title} pictures={data.pictures} />
            <section className="accommodation-informations">
                <div className="accommodation-general">
                    <h1>{data.title}</h1>
                    <p className="location">{data.location}</p>
                    <div className="tags">
                        {data.tags.map((tag, index) => 
                            <span key={index} className="tagElement">{tag}</span>
                        )}
                    </div>
                </div>
                <div className="owner-infos">
                    <div className="accommodation-owner">
                        <div className="owner">
                            <p className="host-name">{data.host.name}</p>
                            <img src={data.host.picture} alt={data.host.name} className="host-picture"></img>
                        </div>
                    </div>
                    <Rating number={data.rating} />
                </div>
            </section>
            <section className="container-collapse">
                <Collapse element="description" title="Description" description={<p>{data.description}</p>} />
                <Collapse element="equipments" title="Équipements" description={<ul> {data.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)} </ul>}/>
            </section>
        </div>
    )
    return (
        <div className="container container-accommodation">
            {accommodation}
        </div>
    )
}
 
export default Accommodation