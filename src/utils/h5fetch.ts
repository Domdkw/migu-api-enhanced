/**
 * 创建带超时的 AbortSignal
 * 兼容不支持 AbortSignal.timeout 的环境（如 EdgeOne）
 */
const createTimeoutSignal = (ms: number): AbortSignal => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), ms);
    return controller.signal;
};

export const h5fetch = async (url: string, init?: RequestInit) => {
    if (!init) {
        init = {
            method: 'GET',
            signal: createTimeoutSignal(5000)
        };
    } else if (!init.signal) {
        init.signal = createTimeoutSignal(5000);
    }
    
    const response = await fetch(url, init);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};