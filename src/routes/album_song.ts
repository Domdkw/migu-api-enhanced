import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /album/song
     * 获取专辑歌曲列表
     * @param albumId - 专辑ID
     * @param page - 页码
     */
    app.get('/album/song', async (c) => {
        const albumId = c.req.query('albumId') ?? '';
        const page = c.req.query('page') ?? 1;

        const data = await h5fetch(`http://app.c.nf.migu.cn/MIGUM3.0/resource/album/song/v2.0?albumId=${albumId}&pageNo=${page}`);
        return c.json({
            success: true,
            data
        });
    });
}