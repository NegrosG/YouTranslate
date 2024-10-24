import axios from 'axios';

export const TranslateInput = async (Input, FromLang, ToLang) => {
    try {
        const result = await axios.post('https://libretranslate.com/translate', {
            q: Input,
            source : FromLang,
            target: ToLang,
            format: "text"
        });
        
        return result.data.TranslatedInput;

}  catch(error) {
        console.error("Translation Error:", error);
        return "Translation failed";
    }
};


export default TranslateInput