import React from 'react';

export default function Textarea({ state1, state2, stateError }) {
    return (
        <div className="floating-container">
            <textarea className={stateError ? "floating errorText errorBorder" : "floating"} value={state1} onChange={(event) => state2(event.target.value)} required />
            <span className="floating-label">Treść wiadomości</span>
            {stateError && <p className="errorText">{stateError}</p>}
        </div>
    )
}