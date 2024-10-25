import axios from 'axios';

const TranslateInput = async (Input, FromLang, ToLang) => {
    try {
        const result = await axios.post(
            'https://cors-anywhere.herokuapp.com/https://api-free.deepl.com/v2/translate',
            new URLSearchParams({
                text: Input,
                source_lang: FromLang.toUpperCase(),
                target_lang: ToLang.toUpperCase(),
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `DeepL-Auth-Key 8a2e19f6-92ec-4c39-9170-f463ff8e2b7c:fx`
                }
            }
        );

        console.log("DeepL API Response:", result.data);
        return result.data.translations[0].text;

    } catch (error) {
        console.error("Error translating text:", error.result ? error.result.data : error.message);
        return "Translation failed!";
    }
};

export default TranslateInput;