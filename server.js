// Backend server (Node.js/Express)
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3001;

// Security: Rate limiting (10 requests/minute)
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10
});
app.use(limiter);

// Security: CORS restricted to your frontend domain
app.use(cors({ origin: 'https://sra1kurapati.github.io/project/' }));

// API endpoint
app.post('/ask', async (req, res) => {
    try {
        const { question } = req.body;
        
        // Security: Input validation
        if (!question || typeof question !== 'string') {
            return res.status(400).json({ error: 'Invalid question format' });
        }

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-4",
                messages: [{
                    role: "system",
                    content: "You are a cybersecurity expert. Provide concise, accurate answers. If unsure, say 'I cannot answer that definitively.'"
                }, {
                    role: "user",
                    content: question
                }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json({ answer: response.data.choices[0].message.content });
    } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
