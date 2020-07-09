import React, { useState } from 'react';
export default function SectionImageFilm({ sectionData }) {
    const [display, setDisplay] = useState("");

    const myOwnSettings = () => {
        if (sectionData.image === "imageSecond") {
            return (
                <div className="leftTopConer">
                    <div></div>
                </div>
            )
        } else if (sectionData.image === "imageThird") {
            return (
                <div className="play-container">
                    <img onClick={() => setDisplay("block")} src={require("../../assets/image/play-button.svg")} className="play_me" />
                    <div id="video" className="lightbox" onClick={() => setDisplay("")} style={{ display: display }}>
                        <div className="lightbox-container">
                            <div className="lightbox-content">

                                <button className="lightbox-close" onClick={() => setDisplay("")}>
                                    Close | ✕
      </button>
                                <div className="video-container">
                                    <iframe id="youtube" width="960" height="540" src={display ? "https://www.youtube.com/embed/WsptdUFthWI?showinfo=0" : ""} frameborder="0" allowfullscreen></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className={`sectionImageFilm ${sectionData.image}`}>
            {myOwnSettings()}
        </div>
    )
}