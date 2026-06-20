import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /rank/info
     * 获取排行榜栏目内容
     * @param id - 排行榜栏目 ID
     */
    app.get('/rank/info', async (c) => {
        const id = c.req.query('rankId') ?? '';
        const page = c.req.query('page') ?? 1;

        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/rank/rank-info/v1.0?pageNo=${page}&rankId=${id}`);
        return c.json({
            success: true,
            data
        });
    });
}