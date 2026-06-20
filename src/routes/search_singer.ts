import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/singer
     * 搜索歌手
     * @param text - 搜索关键词
     */
    app.get('/search/singer', async (c) => {
        const text = c.req.query('text') ?? '';

        const data = await h5fetch(`https://app.u.nf.migu.cn/pc/resource/search/singer/v1.0?text=${text}`);
        return c.json({
            success: true,
            data
        });
    });
}