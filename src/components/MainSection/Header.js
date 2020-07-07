import React from "react";

export default function Header() {
    return (
        <header>
            <img src={require("../../assets/UW-bialy.svg")}/>
            <ul className="menu">
                <li>I stopnia</li>
                <li>II stopnia</li>
                <li>Podyplomowe</li>
                <li>Szkolenia</li>
                <li>Usługi</li>
            </ul>
        </header>
    )
}