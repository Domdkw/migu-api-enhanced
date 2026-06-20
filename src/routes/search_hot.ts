import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/hot
     * 获取热门搜索排行
     */
    app.get('/search/hot', async (c) => {
        const data = await h5fetch(`https://app.u.nf.migu.cn/bmw/hot-search/search-rank-list/v1.0`);
        return c.json({
            success: true,
            data
        });
    });
}