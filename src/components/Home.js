import React from "react";
import MainSection from './MainSection/MainSection';
import CenterSection from './CenterSection/CenterSection';
import Form from './Form/Form'
import Footer from './Footer/Footer'

export default function Home() {
    return (
        <div className="container">
            <MainSection />
            <CenterSection />
            <Form />
            <Footer />
        </div>
    )
}