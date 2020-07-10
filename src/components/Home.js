import React from "react";
import MainSection from './MainSection/MainSection';
import CenterSection from './CenterSection/CenterSection';
import Form from './Form/Form'

export default function Home() {
    return (
        <div className="container">
            <MainSection />
            <CenterSection />
            <Form />
        </div>
    )
}