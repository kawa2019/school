import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const [menuSwitch, setMenuSwitch] = useState("")
    const burgerMenu = useMediaQuery({
        query: '(max-width: 999px)'
    })
    const arrayMenu = ["I stopnia", "II stopnia", "Podyplomowe", "Szkolenia", "Usługi"]
    return (
        <header>
            <img src={require("../../assets/image/UW-bialy.svg")} />
            {burgerMenu && <img onClick={() => setMenuSwitch(!menuSwitch)} width="50px" height="50px" src={require("../../assets/image/open-menu.svg")} />}
            <ul className={(menuSwitch && burgerMenu) ? "menu menuVisible" : "menu"}>
                {arrayMenu.map(site => <li><a>{site}</a></li>)}
            </ul>
        </header>
    )
}