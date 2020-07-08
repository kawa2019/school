import React from 'react';

export default function SectionText({ sectionData }) {
    return (
        <div className="sectionText">
            <h1>{sectionData.header}</h1>
            <p>{sectionData.text}</p>
        </div>
    )
}