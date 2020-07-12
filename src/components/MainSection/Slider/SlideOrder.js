import React from 'react'

export default function SlideOrder({ textArray, styleArrow }) {
    return (
        <div className="ellipse">
            {textArray.map((text, index) => <img key={index} className={styleArrow(index)} src={require("../../../assets/image/Ellipse 764 copy.svg")}></img>)}
        </div>
    )
}