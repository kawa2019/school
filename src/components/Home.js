import React from "react";
import MainSection from './MainSection/MainSection';
import CenterSection from './CenterSection/CenterSection';

export default function Home() {
    return (
        <div className="container">
            <MainSection />
            <CenterSection />
        </div>
    )
}