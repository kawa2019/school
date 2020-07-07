import React from 'react';

export default function Slider() {
    const textArray = ["Będziesz się uczyć z ciekawością. Obiecujemy.",
        "Lorem ipsum 222", "Lorem ipsum 333", "Lorem ipsum 444",]

    return (
        <>
            <SliderText textArray={textArray} />
            <SlideOrder textArray={textArray}/>
            <Buttons />
            <Arrows/>
        </>
    )
}