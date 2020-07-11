import React from 'react';

export default function Subsites() {
    const subsitesArray = [{ header: "O nas", anchors: ["Dlaczego CDV", "Kadra naukowa", "Dla mediów", "Kontakt"] }, {
        header: "Dla kandydata",
        anchors: ["Poradnik maturzysty", "Rekrutacja", "Kredyt studencki", "Studia dla cudzoziemców"]
    }, { header: "Dla studenta", anchors: ["Wirtualna Uczelnia", "Stypendia", "Biuro Karier", "Studiuj dalej"] }, {
        header: "Dla biznesu",
        anchors: ["Współpraca z biznesem", "EmotionsLAB", "Wynajem sal", "Znajdź pracownika"]
    },
    { header: "Na skróty", anchors: ["Aktualności", "Wydarzenia", "Konferencje", "Blog"] }]
    return (
        <div className="subsites">
            {subsitesArray.map(object => {
                return (
                    <div>
                        <a>{object.header}</a>
                        {object.anchors.map(anchor => <a>{anchor}</a>)}
                    </div>)
            })}
        </div>
    )
}