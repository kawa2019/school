import React from 'react';

export default function InputText({ data, state1, state2, stateError }) {
    return (
        <div className={stateError ? "inputText floating-container errorForm" : "inputText floating-container"} >

            <input type="text" className={stateError ? "floating errorText errorBorder" : "floating"} value={state1} onChange={(event) => state2(event.target.value)} required />
            <span className="floating-label">{data.text}</span>
            {stateError && <p className="errorText">{stateError}</p>}
        </div>
    )
}