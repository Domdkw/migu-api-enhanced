import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /album/info
     * 获取专辑详情
     * @param albumId - 专辑ID
     */
    app.get('/album/info', async (c) => {
        const albumId = c.req.query('albumId') ?? '';

        const data = await h5fetch(`http://app.c.nf.migu.cn/MIGUM3.0/resource/album/v2.0?albumId=${albumId}`);
        return c.json({
            success: true,
            data
        });
    });
}