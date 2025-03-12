import { useContext } from 'react';
import { TimingContext } from '../../Home/page';

/**
 * Custom hook to access the TimingContext.
 *
 * This hook provides the current context value of TimingContext.
 * It must be used within a TimingProvider, otherwise it will throw an error.
 *
 * @throws {Error} If the hook is used outside of a TimingProvider.
 * @returns {TimingContextType} The current context value of TimingContext.
 */
export function useTimings() {
    const context = useContext(TimingContext);

    if (!context) {
        throw new Error('useTimings must be used within a TimingProvider');
    }

    return context;
}