import React from 'react';

export default function Checkbox({ state1, state2, stateError }) {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox_1" checked={state1} onChange={(event) => state2(event.target.checked)} />
            <label htmlFor="checkbox_1" className={stateError&&"errorBefore"}>Wyrażam zgodę na przetwarzanie moich danych osobowych w rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych oraz ustawy z dnia 16 lipca 2004 roku Prawo telekomunikacyjne w celach marketingowych przez Collegium Da Vinci i oświadczam, iż podanie przeze mnie danych osobowych jest dobrowolne oraz iż zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia.</label>
            {stateError && <p className="errorText">{stateError}</p>}
        </div>
    )
}