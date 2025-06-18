import { useState, useEffect } from 'react';
import { breakpoints } from '@/globalStyles';

function useIsMobile() {
    // Initialize state with a default value (e.g., false) for SSR
    // The actual match will be determined on the client side after hydration
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQueryList = window.matchMedia(`(width < ${breakpoints.md})`);

        setIsMobile(mediaQueryList.matches);

        const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches);

        mediaQueryList.addEventListener('change', listener);

        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, []);

    return isMobile;
}

export default useIsMobile;
