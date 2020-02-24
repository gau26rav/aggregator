import React from 'react'
import { useTranslation } from "react-i18next";

function LanguageSelection() {
    const { i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div style={{ "display": "inline-flex" }}>
            <div>Which one is your language?</div>
            <button onClick={() => changeLang('en')}>English</button>
            <button onClick={() => changeLang('hi')}>Hindi</button>
        </div>
    )
}

export default LanguageSelection;
