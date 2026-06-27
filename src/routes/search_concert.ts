import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/concert
     * 搜索演唱会
     * @param text - 搜索关键词
     * @param page - 页码，默认为1
     */
    app.get('/search/concert', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;

        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/search/concert/v1.0?pageNo=${page}&text=${text}`);
        return c.json({
            success: true,
            data
        });
    });
}