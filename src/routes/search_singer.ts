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
        const page = c.req.query('page') ?? 1;

        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/search/singer/v2.0?pageNo=${page}&text=${text}`);
        return c.json({
            success: true,
            data
        });
    });
}