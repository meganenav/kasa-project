import React, { useState } from 'react';
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
                 <img src={ arrowHide } className={ isActive ? "btn-open" : "btn-closed" }alt="Flèche pour gérer l'accordéon" onClick={() => setIsActive(!isActive)}></img>
            </div>
            <div className={isActive ? "collapse-description-block description-show" : "collapse-description-block description-hidden"}>
                {description}
            </div>
        </article>
    )
}
export default Collapse