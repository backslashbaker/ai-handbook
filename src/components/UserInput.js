// UserInput.js
import React, { useState } from 'react';

function UserInput() {
    const [question, setQuestion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(question);
        setQuestion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserInput;