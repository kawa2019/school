import React, { useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from './config';

const GoogleMaps = (props) => {
    const [zoomLevel, setZoomLevel] = useState(16)
    const [lat, setLat] = useState(51.4934);
    const [lng, setLng] = useState(0.0098);
    return (
        <div className="footer-left">
            <p>ul. Głogowska 10 61-719 Poznań<br/> tel. 61 27 11 000</p>
            <div className='map'>
                <Map
                    google={props.google}
                    zoom={zoomLevel}
                    disableDefaultUI={config.useDefaultUI}
                    initialCenter={{
                        lat,
                        lng
                    }}
                />
            </div>
        </div>
    );
}

export default GoogleApiWrapper({ apiKey: config.apiKey })(GoogleMaps);