import React from 'react';
import Section from './Section';

export default function CenterSection() {
    const sectionArray = [{
        header: "Dla kogo?", text: <span>Dedykowane nauczycielom posiadającym przygotowanie pedagogiczne, którzy chcą uzyskać merytoryczne i metodyczne przygotowanie do nauczania kolejnego przedmiotu - Geografii.<br></br><br></br>
Studia adresowane są do osób legitymujących się wyższym wykształceniem na poziomie studiów licencjackim o specjalnościach nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne, lub słuchaczy legitymujących się wyższym wykształceniem na poziomie studiów magisterskich nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne, zgodnie z Rozporządzeniem Ministra Edukacji Narodowej z dnia 1 sierpnia 2017 r. w sprawie szczegółowych kwalifikacji wymaganych od nauczycieli <span className="lawFirstText">(Dz.U. 2017 poz. 1575)</span>.<span className="bottomFirstText">Wymagane od kandydata:<br></br>
                <img src={require("../../assets/image/nawigacja slajdera.svg")} />Ukończone studia wyższe<br></br><img src={require("../../assets/image/nawigacja slajdera.svg")} />Przygotowanie pedagogiczne</span></span>, image: "imageFirst"
    }, {
        header: "Po co?", text: `UW wie co zrobić, by programy proponowanych kierunków studiów były jak najbardziej atrakcyjne z biznesowego punktu widzenia. Do współpracy zapraszamy przedsiębiorców, trenerów, doświadczonych praktyków. Dbamy o to, żeby nasi studenci korzystali z doświadczenia i wiedzy osób, które odniosły w życiu zawodowy sukces. Dążymy do tego, by wybierający naszą uczelnię już w trakcie studiów mieli kontakt z jak największą liczbą pracodawców i praktyków biznesu ponieważ wiemy, że pomoże to im w zdobyciu wielu potrzebnych kwalifikacji oraz umiejętności, które zaprocentują w każdym miejscu pracy a także zainspiruje do poszerzania swoich kompetencji.`,
        image: "imageSecond"
    },
    {
        header: "Z kim?", text: <span>Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi do ciągłego rozwoju. CDV to miejsce, w którym studenci z zainteresowaniem i z przyjemnością zdobywają wiedzę. Zarówno studenci, absolwenci, jak i pracownicy to osoby nie tylko ciekawe świata, ale także pełne pasji w odkrywaniu nowych rzeczy i w pozytywny sposób wpływające na swoje otoczenie.
        <br></br><br></br> 
        Nasze kierunki studiów są interesujące i innowacyjne, tworzone we współpracy z pracodawcami oraz na podstawie trendów w światowej gospodarce i kierunku zmian na dynamicznym rynku pracy. Nasi absolwenci znajdują pracę zgodną ze swoimi zainteresowaniami i wykształceniem.</span>,
        image: "imageThird"
    }]
    return (
        <div className="centerSection">
            <Section sectionData={sectionArray[0]} reverse={false} />
            <Section sectionData={sectionArray[1]} reverse={true} />
            <Section sectionData={sectionArray[2]} reverse={false} />
        </div>
    )
}