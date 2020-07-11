import React from 'react';
import GoogleMaps from './GoogleMaps'
import Subsites from './Subsites'

export default function Footer() {
    const style={
        position:"absolute",
        color: "#fff",
        bottom: "200px",
        right: "50px"
    }
    return (
        <div className="containerFooter">
            <GoogleMaps />
            <Subsites />
            <p style={style}>Projekt: Crafton Realizacja: Kamil Kuciak</p>
        </div>
    )
}