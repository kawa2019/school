import React, { useState } from 'react';
import InputText from './InputText'
import Textarea from './Textarea'
import Checkbox from './Checkbox'

export default function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [gdpr, setGdpr] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorSurname, setErrorSurname] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorGdpr, setErrorGdpr] = useState("");
    const [successError, setSuccessError] = useState("");
    const only_letters = /^[A-Za-z]+$/
    const regexEmail = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/
    const object = { name: name, surname: surname, email: email, message: message }
    const handlerForm = async (event) => {
        event.preventDefault();
        setErrorSurname("");
        setErrorName("");
        setErrorEmail("");
        setErrorMessage("");
        setErrorGdpr("");
        setSuccessError("");
        const errors = [];
        if (name.trim().length < 3 || !only_letters.test(name)) {
            console.log("error name")
            setErrorName("Imię za krótkię bądź zawiera inne niż litery znaki!")
            errors.push(name)
        }
        if (surname.trim().length < 3 || !only_letters.test(surname)) {
            console.log("error surname")
            setErrorSurname("Nazwisko za krótkie bądź zawiera inne niż litery znaki!")
            errors.push(surname)
        }
        if (!regexEmail.test(email)) {
            console.log("error email")
            setErrorEmail("Nazwisko za krótkie bądź zawiera inne niż litery znaki!")
            errors.push(email)
        }
        if (message.trim().length < 10 || message.trim().length > 120) {
            console.log("error message")
            setErrorMessage("Wiadomość musi mieć od 10 do 120 znaków!")
            errors.push(message)
        }
        if (!gdpr) {
            console.log("ereor gdpr")
            setErrorGdpr("Musisz zaznaczyć Rodo aby móc przejść dalej!")
            errors.push(errorGdpr)
        }

        if (errors.length === 0) {
            try {
                const response = await fetch("/api/index.php", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(object)
                });
                console.log(response)
                if (response.ok) {
                    setSuccessError("zrealizowane")
                } else {
                    throw ("404 not found")
                }
            } catch (error) {
                alert(error)
                console.log(error);
                setSuccessError(`Problem is ${error}`)
            }
        }
    }

    const inputsArray = [{ class: "", text: "Imię" }, { class: "", text: "Nazwisko" }, { class: "", text: "Adres e-mail" }];
    return (
        <div className="containerForm">
            <form onSubmit={handlerForm}>
                <p className="form-header"> Nie znalazłeś odpowiedniego kontaktu?<span>Skorzystaj z formularza.</span>
                    {successError && <span style={{ color: "#089404 " }}>{successError}</span>}</p>
                <InputText data={inputsArray[0]} state1={name} state2={setName} stateError={errorName} />
                <InputText data={inputsArray[1]} state1={surname} state2={setSurname} stateError={errorSurname} />
                <InputText data={inputsArray[2]} state1={email} state2={setEmail} stateError={errorEmail} />
                <Textarea state1={message} state2={setMessage} stateError={errorMessage} />
                <Checkbox state1={gdpr} state2={setGdpr} stateError={errorGdpr} />
                <input type="submit" value="wyślij" />
            </form>
        </div>
    )
}