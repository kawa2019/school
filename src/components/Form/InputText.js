import React from 'react';

export default function InputText({ data }) {
    return (
        <div className="inputText floating-container" >
            <input type="text" className="floating" required/>
            <span className="floating-label">{data.text}</span>
        </div>
    )
}