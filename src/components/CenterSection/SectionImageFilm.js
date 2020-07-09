import React from 'react';
export default function SectionImageFilm({ sectionData }) {
    const myOwnSettings = () => {
        if (sectionData.image === "imageSecond") {
            return (
                <div className="leftTopConer">
                    <div></div>
                </div>
            )
        }
    }
    return (
        <div className={`sectionImageFilm ${sectionData.image}`}>
            {myOwnSettings()}
        </div>
    )
}