export const h5fetch = async (url: string, init?: RequestInit) => {
    if (!init) {
        init = {
            method: 'GET',
            signal: AbortSignal.timeout(5000)
        };
    }
    
    const response = await fetch(url, init);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};