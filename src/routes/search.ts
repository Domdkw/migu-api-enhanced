import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search
     * 搜索歌曲
     * @param text - 搜索关键词
     * @param page - 页码，默认为1
     */
    app.get('/search', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;

        const data = await h5fetch(`https://app.u.nf.migu.cn/pc/resource/song/item/search/v1.0?text=${text}&pageNo=${page}`);
        return c.json({
            success: true,
            data
        });
    });
}