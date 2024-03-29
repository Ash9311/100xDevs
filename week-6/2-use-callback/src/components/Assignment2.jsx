import React, { useState, useCallback } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of 
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

export function Assignment2() {
    const [inputText, setInputText] = useState('');
    const [inputText2, setInputText2] = useState('');

    // Your code starts here


    const showAlert = useCallback(() => {
        alert(inputText);
    }, [inputText])
    // Your code ends here
    const showAlert2 = useCallback(() => {
        alert(inputText2);
    }, [inputText2])
    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter some text"
            />
            <input
                type="text2"
                value={inputText2}
                onChange={(e) => setInputText2(e.target.value)}
                placeholder="Enter some text 2"
            />
            <Alert showAlert={showAlert} />
            <Alert2 showAlert2={showAlert2} />
        </div>
    );
};

function Alert({ showAlert }) {
    return <button onClick={showAlert}>Show Alert</button>
}

function Alert2({ showAlert2 }) {
    return <button onClick={showAlert2}>Show Alert 2</button>
}

