import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /rank/index
     * 获取排行榜栏目
     */
    app.get('/rank/index', async (c) => {
        const data = await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/rank/rank-index/v1.0`);
        return c.json({
            success: true,
            data
        });
    });
}