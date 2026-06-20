import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/all
     * 综合搜索
     * @param text - 搜索关键词
     * @param page - 页码，默认为1
     */
    app.get('/search/all', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;

        const data = await h5fetch(`https://app.u.nf.migu.cn/pc/v1.0/content/search_all.do?text=${text}&pageNo=${page}&searchSwitch={%22songlist%22:+1}`);
        return c.json({
            success: true,
            data
        });
    });
}