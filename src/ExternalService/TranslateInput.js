import axios from 'axios';

const TranslateInput = async (Input, FromLang, ToLang) => {
    try {
        const result = await axios.post('../api/translate', {
            Input,
            FromLang,
            ToLang
        });

        if (result.data.translations && result.data.translations.lenght > 0) {
            return result.data.translations[0].text;
        } else {
            console.error("Unexpected response format:", result.data);
            return "Translation failed!";
        }

    } catch (error) {
        console.error("Error translating text:", error.result ? error.result.data : error.message);
        return "Translation failed!";
    }
};

export default TranslateInput;