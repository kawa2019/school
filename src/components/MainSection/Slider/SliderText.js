import React from 'react';

export default function SliderText({ textArray, textArrayIndex }) {
    return (
        <p className="sliderText">{textArray[textArrayIndex]}</p>
    )
}