import React from 'react';
import InputText from './InputText'
import Textarea from './Textarea'
import Checkbox from './Checkbox'

export default function Form() {
    const inputsArray = [{ class: "", text: "Imię" }, { class: "", text: "Nazwisko" }, { class: "", text: "Adres e-mail" }];
    return (
        <div className="containerForm">
            <form>
                <span> Nie znalazłeś odpowiedniego kontaktu?<span>Skorzystaj z formularza.</span></span>
                <InputText data={inputsArray[0]} />
                <InputText data={inputsArray[1]} />
                <InputText data={inputsArray[2]} />
                <Textarea />
                <Checkbox />
                <input type="submit" value="wyślij" />
            </form>
        </div>
    )
}