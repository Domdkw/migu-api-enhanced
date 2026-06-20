import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /recommend/playlist
     * 获取推荐播放列表
     */
    app.get('/recommend/playlist', async (c) => {
        const data = await h5fetch(`http://app.c.nf.migu.cn/bmw/index-show/recommend-playlist/v3.0`);
        return c.json({
            success: true,
            data
        });
    });
}