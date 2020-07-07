import React from "react";
import Header from './Header';
import Slider from './Slider/Slider'

export default function MainSection() {
    return (
        <div className="first_view">
            <div className="backgroundSlidera"></div>
            <Header />
            <Slider />
        </div>
    )
}