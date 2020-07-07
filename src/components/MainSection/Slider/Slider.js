import React, { useState } from 'react';
import SliderText from './SliderText';
import SlideOrder from './SlideOrder';
import Buttons from './Buttons';
import Arrows from './Arrows';

export default function Slider() {

    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const textArray = ["Będziesz się uczyć z ciekawością. Obiecujemy.",
        "Lorem ipsum 222", "Lorem ipsum 333", "Lorem ipsum 444",];

    return (
        <>
            <SliderText textArray={textArray} textArrayIndex={textArrayIndex} />
            <SlideOrder textArray={textArray} textArrayIndex={textArrayIndex}/>
            <Buttons />
            <Arrows setTextArrayIndex={setTextArrayIndex} />
        </>
    )
}