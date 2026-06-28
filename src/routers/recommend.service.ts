import type { Hono } from 'hono';
import { getRecommendPlaylist } from '../modules/recommend_playlist';
import { getRecommendSong } from '../modules/recommend_song';

export default function (app: Hono) {
    app.get('/recommend/playlist', async (c) => {
        const data = await getRecommendPlaylist();
        return c.json({ success: true, data });
    });

    app.get('/recommend/song', async (c) => {
        const size = c.req.query('size') ?? 20;
        const scene = c.req.query('scene') ?? 'TODAY_RECOMMEND';
        const data = await getRecommendSong(Number(size), String(scene));
        return c.json({ success: true, data });
    });
}
