// api/translate.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { text, sourceLang, targetLang } = req.body;

        try {
            const response = await axios.post(
                'https://api-free.deepl.com/v2/translate',
                new URLSearchParams({
                    text: text,
                    source_lang: sourceLang.toUpperCase(),
                    target_lang: targetLang.toUpperCase(),
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
                    }
                }
            );

            res.status(200).json(response.data);
        } catch (error) {
            console.error("Error in serverless function:", error.message);
            res.status(500).json({ error: 'Translation failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}