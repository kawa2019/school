import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const [menuSwitch, setMenuSwitch] = useState("")
    const burgerMenu = useMediaQuery({
        query: '(max-width: 999px)'
    })
    return (
        <header>
            <img src={require("../../assets/image/UW-bialy.svg")} />
            {burgerMenu && <img onClick={() => setMenuSwitch(!menuSwitch)} width="50px" height="50px" src={require("../../assets/image/open-menu.svg")} />}
            <ul className={(menuSwitch && burgerMenu) ? "menu menuVisible" : "menu"}>
                <li><a>I stopnia</a></li>
                <li><a>II stopnia</a></li>
                <li><a>Podyplomowe</a></li>
                <li><a>Szkolenia</a></li>
                <li><a>Usługi</a></li>
            </ul>
        </header>
    )
}