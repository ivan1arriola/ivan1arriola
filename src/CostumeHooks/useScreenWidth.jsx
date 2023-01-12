import { useState, useEffect } from 'react';

const useScreenWidth = (breakpoint) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isSmallScreen, setIsSmallScreen] = useState(width <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setIsSmallScreen(width <= breakpoint);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width, breakpoint]);

    return [isSmallScreen, width];
};

export default useScreenWidth;