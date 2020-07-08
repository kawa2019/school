import React from 'react';
import SectionText from './SectionText';
import SectionImageFilm from './SectionImageFilm'

export default function Section({ sectionData, reverse }) {
    console.log(reverse)
    return (
        <div className={reverse?"section sectionReverse":"section"}>
            <SectionText sectionData={sectionData} />
            <SectionImageFilm sectionData={sectionData} />
        </div>
    )
}