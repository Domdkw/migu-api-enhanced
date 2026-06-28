/**
 * 创建带超时的 AbortSignal
 * 兼容不支持 AbortSignal.timeout 的环境（如 EdgeOne）
 * @param ms - 超时毫秒数
 * @returns 可用于 fetch 第二个参数 init.signal 的 AbortSignal
 */
export const createTimeoutSignal = (ms: number): AbortSignal => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), ms);
    return controller.signal;
};

/**
 * 通用 GET 请求封装，自动注入 5 秒超时
 * @param url - 完整请求 URL
 * @param init - 可选 fetch init 选项（若未传 signal，则默认注入 5 秒超时）
 * @returns 解析后的 JSON 数据
 */
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