import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * POST /can-listen
     * 检查歌曲是否可听
     * @param body - JSON 字符串，包含歌曲 ID
     */
    app.post('/can-listen', async (c) => {
        try {
        const body = await c.req.json();

        const data = await h5fetch(
            `https://app.c.nf.migu.cn/strategy/pc/can-listen/v1.0`
        ,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return c.json({
            success: true,
            data
        });
        } catch (e) {
            return c.json({
                success: false,
                error: e instanceof Error ? e.message : String(e)
            }, 500);
        }
    });
}