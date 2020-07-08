import React, { useState } from 'react';

export default function Arrows({ setTextArrayIndex, textArrayIndex, styleArrow }) {
    const changeTextArrayIndex = (num) => {
        if (num === 1 && textArrayIndex !== 0) {
            setTextArrayIndex(prevState => prevState - 1)
        } else if (num === 2 && textArrayIndex !== 3) {
            setTextArrayIndex(prevState => prevState + 1)
        }
    }
    
    console.log(styleArrow(0))
    return (
        <div className="arrows">
            <img className={styleArrow(0)} onClick={() => changeTextArrayIndex(1)} src={require("../../../assets/nawigacja slajdera.svg")}
            ></img>
            <img className={styleArrow(3)} onClick={() => changeTextArrayIndex(2)} src={require("../../../assets/nawigacja slajdera.svg")}
            ></img>
        </div>
    )
}