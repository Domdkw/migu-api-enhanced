import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/singerTab/list
     * 获取歌手列表
     */
    app.get('/search/singerTab/list', async (c) => {
        const tab = c.req.query('tab') || '';

        const data = await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/bmw/singer-index/list/v1.0?tab=${tab}&templateVersion=3`);
        return c.json({
            success: true,
            data
        });
    });
}