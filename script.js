// Frontend code to handle user interaction
document.getElementById('ask-button').addEventListener('click', async () => {
    const question = document.getElementById('question-input').value;
    const answerSection = document.getElementById('answer-section');
    
    answerSection.innerHTML = '<div class="loading">Analyzing your question...</div>';
    
    try {
        const response = await fetch('https://your-deployed-backend.com/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question }),
        });
        
        const data = await response.json();
        answerSection.innerHTML = `<div class="answer">${data.answer}</div>`;
    } catch (error) {
        answerSection.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
});
