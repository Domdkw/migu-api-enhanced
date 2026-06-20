import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /search/singerTab
     * 获取歌手标签
     */
    app.get('/search/singerTab', async (c) => {
        const data = await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/bmw/singer-index/tabs/v2.0`);
        return c.json({
            success: true,
            data
        });
    });
}