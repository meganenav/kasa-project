import React, { useState } from 'react'
import arrowLeft from '../../images/arrow_left.svg'
import arrowRight from '../../images/arrow_right.svg'

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = props.pictures
    const multipleSlides = slides.length > 1 && true
    const previous = () => {
        let newIndex
        if(currentIndex === 0) {
            newIndex = slides.length -1
        }
        else {
            newIndex = currentIndex -1
        }
        setCurrentIndex(newIndex)
    }

    const next = () => {
        let newIndex
        if(currentIndex === slides.length -1) {
            newIndex = 0
        }
        else {
            newIndex = currentIndex +1
        }
        setCurrentIndex(newIndex)
    }

    return (
        <section className="slideshow">
            <img src={slides[currentIndex]} alt={props.alt} className="slide"></img>
                {multipleSlides && 
                    <>
                        <div className="directions">
                            <img src={arrowLeft} alt="Flèche navigation gauche" className="arrow-left" onClick={previous}></img>
                            <img src={arrowRight} alt="Flèche navigation droite" className="arrow-right" onClick={next}></img>
                        </div>
                        <div className="pagination">{currentIndex+1} / {slides.length}</div>
                    </>
                }
        </section>
    )
}
export default Slideshow