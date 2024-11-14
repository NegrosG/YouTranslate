export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { text, sourceLang, targetLang } = req.body;

        try {
            const response = await fetch('https://api-free.deepl.com/v2/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
                },
                body: new URLSearchParams({
                    text: text,
                    source_lang: sourceLang.toUpperCase(),
                    target_lang: targetLang.toUpperCase(),
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error response data:", errorData);
                return res.status(response.status).json({ error: errorData });
            }

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error("Error in serverless function:", error.message);
            res.status(500).json({ error: 'Translation failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
