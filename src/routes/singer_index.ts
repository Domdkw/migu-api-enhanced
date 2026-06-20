import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /singer/index
     * 获取歌手信息
     * @param singerId - 歌手ID
     */
    app.get('/singer/index', async (c) => {
        const singerId = c.req.query('singerId') ?? '';

        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/singer/index/v1.0?singerId=${singerId}`);
        return c.json({
            success: true,
            data
        });
    });
}