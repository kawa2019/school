import React from 'react'

export default function SlideOrder({ textArray, styleArrow }) {
    return (
        <div className="ellipse">
            {textArray.map((text, index) => <img className={styleArrow(index)} src={require("../../../assets/Ellipse 764 copy.svg")}></img>)}
        </div>
    )
}