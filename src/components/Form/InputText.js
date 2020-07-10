import React from 'react';

export default function InputText({ data }) {
    return (
        <div>
            <input type="text"/>
            <span class="floating-label">{data.text}</span>
        </div>
    )
}