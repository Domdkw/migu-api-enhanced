import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/default
     * 获取默认搜索文本
     */
    app.get('/search/default', async (c) => {
        const data = await h5fetch(`http://app.c.nf.migu.cn/column/search/default-text/v3.0?resourceVersion=2`);
        return c.json({
            success: true,
            data
        });
    });
}