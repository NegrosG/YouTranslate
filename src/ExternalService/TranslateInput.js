const TranslateInput = async (Input, FromLang, ToLang) => {
    try {

        const response = await fetch('/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: Input,
                sourceLang: FromLang,
                targetLang: ToLang
            })
        });

        
        if (!response.ok) {
            console.error("Translation request failed:", response.status);
            return "Translation failed!";
        }

        
        const result = await response.json();


        if (result.translations && result.translations.length > 0) {
            return result.translations[0].text;
        } else {
            console.error("Unexpected response format:", result);
            return "Translation failed!";
        }
    } catch (error) {
        console.error("Error translating text:", error.message);
        return "Translation failed!";
    }
};

export default TranslateInput;
