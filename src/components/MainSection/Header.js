import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const [menuSwitch, setMenuSwitch] = useState("")
    const [scroll, setScroll] = useState(false);
    const burgerMenu = useMediaQuery({
        query: '(max-width: 999px)'
    })
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 80);
      });
    }, []);
    const classNameMenu=()=>{
        if (menuSwitch && burgerMenu){
            return "menu menuVisible"
        } else{
            if (scroll){
                return "menu fixedMenu" 
            }
            return "menu"
        }
    }

    const arrayMenu = ["I stopnia", "II stopnia", "Podyplomowe", "Szkolenia", "Usługi"]
    return (
        <header>
            <img src={require("../../assets/image/UW-bialy.svg")} />
            {burgerMenu && <img onClick={() => setMenuSwitch(!menuSwitch)} width="50px" height="50px" src={require("../../assets/image/open-menu.svg")} />}
            <ul className={classNameMenu()}>
                {arrayMenu.map((site, index) => <li key={index}><a>{site}</a></li>)}
            </ul>
        </header>
    )
}