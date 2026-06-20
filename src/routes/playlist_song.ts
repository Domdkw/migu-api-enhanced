import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /playlist/songlist
     * 获取播放列表歌曲
     * @param id - 播放列表 ID
     * @param page - 页码，默认为1
     * @param size - 每页数量，默认为20
     */
    app.get('/playlist/song', async (c) => {
        const id = c.req.query('playlistId') ?? '';
        const page = c.req.query('page') ?? 1;
        const size = c.req.query('size') ?? 20;

        const data = await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?pageNo=${page}&pageSize=${size}&playlistId=${id}`);
        return c.json({
            success: true,
            data
        });
    });
}