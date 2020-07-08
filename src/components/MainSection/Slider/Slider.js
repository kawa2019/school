import React, { useState } from 'react';
import SliderText from './SliderText';
import SlideOrder from './SlideOrder';
import Buttons from './Buttons';
import Arrows from './Arrows';

export default function Slider() {
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const textArray = [<span>Będziesz się uczyć z ciekawością.<span className="lastWordText">Obiecujemy.</span></span>,
        "Lorem ipsum 222", "Lorem ipsum 333", "Lorem ipsum 444",];
    const styleArrow = (num) => {
        if (num === textArrayIndex) {
            return `arrowsWhite`
        }
    }

    return (
        <div className="bottomOfSlider">
            <div className="left-side-slider">
                <SliderText textArray={textArray} textArrayIndex={textArrayIndex} />
                <Buttons />
                <Arrows styleArrow={styleArrow} setTextArrayIndex={setTextArrayIndex} textArrayIndex={textArrayIndex} />
            </div>
            <SlideOrder styleArrow={styleArrow} textArray={textArray} textArrayIndex={textArrayIndex} />
        </div>
    )
}