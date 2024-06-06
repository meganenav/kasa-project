import React, { useState } from 'react';
import arrowDisplay from '../../images/arrow_display.svg';
import arrowHide from '../../images/arrow_hide.svg';

function Collapse(props) {
    const element = props.element
    const title = props.title
    const description = props.description

    const [isActive, setIsActive] = useState(false);

    return (
        <article className={`collapse collapse-${element}`}>
            <div className="collapse-title-block">
                <p>{title}</p>
                 <img src={isActive ? arrowDisplay : arrowHide } alt="Flèche pour gérer l'accordéon" onClick={() => setIsActive(!isActive)}></img>
            </div>
            <div className={isActive ? "collapse-description-block description-show" : "collapse-description-block description-hidden"}>
                <p>{description}</p>
            </div>
        </article>
    )
}
export default Collapse