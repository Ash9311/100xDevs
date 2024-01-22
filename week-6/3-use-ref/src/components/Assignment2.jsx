import React, { useState, useCallback, useRef, useEffect } from 'react';

export function Assignment2() {
    const [count, setCount] = useState(0);
    const numberOfTimesReRendered = useRef(0);

    useEffect(() => {
        // Increment the count after each render
        numberOfTimesReRendered.current++;
        
    });

    const handleReRender = useCallback(() => {
        // Update state to force re-render
        setCount(count + 1);

    });

    return (
        <div>
            <p>This component has rendered {numberOfTimesReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};
