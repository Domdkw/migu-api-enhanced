import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /playlist/info
     * 获取播放列表信息
     * @param id - 播放列表 ID
     */
    app.get('/playlist/info', async (c) => {
        const id = c.req.query('playlistId') ?? '';

        const data = await h5fetch(`https://app.c.nf.migu.cn/resource/playlist/v2.0?playlistId=${id}`);
        return c.json({
            success: true,
            data
        });
    });
}