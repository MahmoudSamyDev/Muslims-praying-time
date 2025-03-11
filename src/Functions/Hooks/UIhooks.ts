import { useContext } from 'react';
import { TimingContext } from '../../Home/page';

export function useTimings() {
    const context = useContext(TimingContext);

    if (!context) {
        throw new Error('useTimings must be used within a TimingProvider');
    }

    return context;
}