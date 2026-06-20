import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /singer/songlist
     * 获取歌手歌曲列表
     * @param page - 页码
     * @param singerId - 歌手ID
     */
    app.get('/singer/songlist', async (c) => {
        const singerId = c.req.query('singerId') ?? '';
        const page = c.req.query('page') ?? 1;

        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/singer/song/v1.0?pageNo=${page}&singerId=${singerId}&type=1`);
        return c.json({
            success: true,
            data
        });
    });
}