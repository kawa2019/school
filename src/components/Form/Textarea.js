import React from 'react';

export default function Textarea() {
    return (
        <div className="floating-container">
            <textarea className="floating" required/>
            <span className="floating-label">Treść wiadomości</span>
        </div>
    )
}