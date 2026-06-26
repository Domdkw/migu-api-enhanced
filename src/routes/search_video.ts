import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/video
     * 搜索视频
     * @param text - 搜索关键词
     * @param page - 页码，默认为1
     * @param typeOrder - 排序类型
     */
    app.get('/search/video', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const typeOrder = c.req.query('typeOrder') ?? 0;

        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/search/video/v1.0?pageNo=${page}&text=${text}&typeOrder=${typeOrder}`);
        return c.json({
            success: true,
            data
        });
    });
}