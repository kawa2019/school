import React from 'react';
import GoogleMaps from './GoogleMaps'
import Subsites from './Subsites'

export default function Footer() {

    //<p style={style}>Projekt: Crafton Realizacja: Kamil Kuciak</p>
    return (
            <div className="containerFooter">
                <GoogleMaps />
                <Subsites />
                
            </div>
    )
}