import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/suggest
     * 搜索建议
     * @param text - 搜索关键词
     */
    app.get('/search/suggest', async (c) => {
        const text = c.req.query('text') ?? '';

        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/search/suggest/v1.0?text=${text}`);
        return c.json({
            success: true,
            data
        });
    });
}