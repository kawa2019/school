import React from 'react';

export default function Checkbox() {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox_1" />
            <label htmlFor="checkbox_1">Wyrażam zgodę na przetwarzanie moich danych osobowych w rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych oraz ustawy z dnia 16 lipca 2004 roku Prawo telekomunikacyjne w celach marketingowych przez Collegium Da Vinci i oświadczam, iż podanie przeze mnie danych osobowych jest dobrowolne oraz iż zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia.</label>
        </div>
    )
}