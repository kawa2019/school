import React from 'react';

export default function SectionImageFilm({sectionData}) {
    return (
        <div className="">
           <img src={sectionData.image}/>
        </div>
    )
}